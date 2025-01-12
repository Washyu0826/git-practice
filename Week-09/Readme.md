### 啟動與修復 NGINX 服務

#### 1. 啟動 NGINX 服務並查看錯誤訊息
指令：
```bash
sudo systemctl start nginx
```

原因：
啟動 NGINX 時，發現啟動失敗。接著使用以下指令查看更詳細的錯誤訊息：
```bash
sudo systemctl status nginx.service
```
在日誌中發現 `/etc/nginx/nginx.conf` 的第 8 行有額外的分號 (unexpected ";")。

---

#### 2. 修正 NGINX 配置檔案
指令：
```bash
sudo nano /etc/nginx/nginx.conf
```

原因：
修正配置檔案中的語法錯誤，刪除多餘的分號，然後測試配置是否正確：
```bash
sudo nginx -t
```
輸出：
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
再次啟動 NGINX：
```bash
sudo systemctl start nginx
```
如果仍然顯示錯誤，再查看日誌：
```bash
sudo systemctl status nginx.service
```
日誌顯示錯誤原因為 `bind() to 0.0.0.0:80 failed (98: Address already in use)`，表示 80 端口已被佔用。

---

#### 3. 處理佔用 80 端口的 Process
指令：
```bash
sudo lsof -i :80
```
輸出：
```
COMMAND PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
srv     577 root    3u  IPv6   6710      0t0  TCP *:http (LISTEN)
```
終止佔用 80 端口的 Process：
```bash
sudo systemctl stop srv
```
接著再次啟動 NGINX 並查看日誌即可成功啟動。

但此時使用以下指令測試時仍無法連接：
```bash
curl localhost
```

---

#### 4. 檢查是否有防火牆阻擋
在 AWS EC2 上通常使用 AWS Security Groups 控制端口訪問。如果沒有使用 `ufw`，需檢查是否有其他防火牆設置，例如 `iptables`。

檢查防火牆規則：
```bash
sudo iptables -L
```

在 `iptables` 規則中發現，針對 `tcp dpt:http`（80 端口）的 `INPUT` 連線被拒絕。

刪除該條規則：
```bash
sudo iptables -D INPUT -p tcp --dport 80 -j REJECT
```
刪除後再次測試：
```bash
curl localhost
```
此時可正常訪問，但發現顯示 `403 Forbidden`。

---

#### 5. 解決 403 Forbidden 問題
`403 Forbidden` 錯誤表示 NGINX 能接收請求，但由於權限問題無法提供網頁內容。通常原因為：
1. NGINX 的根目錄或網頁目錄的讀取權限問題。
2. 配置檔案中的目錄設定錯誤。

檢查 NGINX 的預設網頁根目錄是否正確：
```bash
sudo nano /etc/nginx/sites-available/default
```
確認以下設置是否正確：
```nginx
root /var/www/html;
```

檢查根目錄的權限：
```bash
ls -ld /var/www/html
```
輸出：
```
drwxr-xr-x 2 www-data www-data 4096 Oct 11 06:53 /var/www/html
```
權限設置允許 NGINX 讀取該目錄內容，表示權限正確。

---

#### 6. 結案
重啟 NGINX：
```bash
sudo systemctl restart nginx
```
測試：
```bash
curl localhost
```
測試成功後可修改網頁內容：
```bash
sudo nano /var/www/html/index.nginx-debian.html
```

至此，所有問題已解決。

---

### 備註
請定期備份 NGINX 配置檔案，並在修改前使用 `nginx -t` 測試語法，以避免服務中斷。

