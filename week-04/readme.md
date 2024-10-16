`/etc`: "et cetera" 的縮寫，通常存放系統全局配置檔案和設定檔。

ex: 網路配置（/etc/network）、用戶帳號資料（/etc/passwd）、服務配置檔案（/etc/ssh/sshd_config）。

`/var`: 通常存放經常變動的資料。

ex：系統運行中的日誌檔案（/var/log）、郵件隊列、暫存檔案、排程任務等。資料可能隨時間變長。

`/boot`: 通常存放包含與系統啟動有關的檔案。

ex: Linux 核心映像檔（vmlinuz）和引導載入器（如 grub 的配置檔案），這些檔案在系統啟動過程中被用來載入作業系統的kernel。

`$PATH 環境變數`: 是系統搜尋執行檔路徑的列表。當你在terminal輸入一個指令時，系統會按照 $PATH 指定的路徑順序去搜尋這個指令的執行檔案。

ex: 執行 ls，系統會在 $PATH 定義的目錄中找尋 ls 的程式。

`which 指令`: 用來顯示某命令執行檔案的絕對路徑。它會依據當前的 $PATH 環境變數，找出命令實際路徑。

ex: 輸入 which python 會顯示 Python 執行檔的路徑。

### 我的 public IP : 3.106.170.238

**2. Instance type: 指的是雲端 instance 的硬體配置（ex: CPU、記憶體、儲存空間、網路能力）**

**3. Nginx: 是一個高效能的開源 Web 伺服器與反向代理，能處理 HTTP、HTTPS 以及 TCP/UDP 協議**

**用途**： 

1. 提供靜態檔案
2. 作為反向代理、負載平衡器，或 Web 應用程式的閘道
3. 處理 SSL/TLS 終端

**特性**： 非同步事件驅動架構、低記憶體佔用、負載平衡等

**4. pm2: 是 Node.js 應用程式的進程管理工具**

**用途**：

1. 啟動、停止與重啟應用程式
2. 保持應用程式持續運行，甚至在崩潰後自動重啟
3. 監控效能指標

**如果不用 pm2 我會使用 forever**

**forever**

**用途**：

用來確保應用程式在伺服器運行期間不會因為意外退出而停止，可以讓 Node.js 應用在崩潰後自動重啟，保持持續運行。

**選擇原因**：

forever 適合簡單的 Node.js 應用程式，不需要太多的進程管理功能，安裝與使用都相對簡單。

**5. proxy: 是在客戶端和伺服器之間充當中介的機制**

**為什麽要透過 Nginx 來 proxy 到 Express 開發的 Web Server?**

1. **負載均衡**： Nginx 可以將多個 Express 伺服器組成一個集群，分配流量到多個伺服器以實現負載均衡

2. **SSL/TLS 終端**： Nginx 可以處理 HTTPS 請求的加密和解密（SSL/TLS 終端），而不需要讓 Express 伺服器處理這些額外的加密工作，從而減少後端伺服器的負擔。

3. **靜態資源服務**： Nginx 是一個高效的靜態資源服務器，可以處理靜態文件（如圖片、CSS、JS），將這些資源直接傳送給客戶端，減少 Express 伺服器的負載。

4. **安全性**： 使用 Nginx 作為反向代理，可以將真正的後端伺服器（Express）隱藏起來，防止外部直接訪問後端伺服器。這樣能加強應用的安全性，例如通過防止直接訪問後端 IP 和端口來減少攻擊面。
   
 - `Forward Proxy: 客戶端 → 正向代理 → 目標伺服器`
 - `Reverse Proxy: 客戶端 → 反向代理 → 後端伺服器 (多個)`

**關鍵區別**：

**反向代理**：保護和優化伺服器端，處理客戶端的所有請求，常用於改善伺服器性能、負載平衡與安全性。

**正向代理**：保護客戶端，幫助它們隱藏身份、繞過網絡限制，或作為中介來訪問目標伺服器。

**6. Nginx設定檔**

server {
    listen 80;
    server_name 3.106.170.238;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}

**7. Security Group:是一組防火牆規則，用來控制虛擬機、EC2 等雲端資源的流量，可以定義允許哪些 IP 和網路協議（如 HTTP, SSH）進入和離開伺服器。**

**用途**:

保護雲端伺服器不受到未經授權的訪問，同時允許合法流量

**原則**:

1. 開啟最少量的端口以防止攻擊
2. 限制 SSH 訪問為特定 IP，或僅開放 HTTP/HTTPS 端口供外部訪問
3. 定期審查並更新安全群組以符合最小權限原則

**8. sudo: "superuser do" 的縮寫，用來以 root 權限執行某些命令。**

**加上sudo**: 需要使用更高的權限 ex:修改系統檔案或安裝軟體

**不用sudo**: 操作僅影響到用戶自己的檔案或應用

**9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」














