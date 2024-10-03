### Q1 package.json 中的 dependencies 與 devDependencies 分別是什麼？

***dependencies:*** 包含的程式運行所需套件(生產環境) ex:HTTP請求所需的express會列在其中

***devDependencies:*** 包含開發過程所需套件(測試、開發工具) ex:jest(測試框架)會列在其中

### Q2 package.json 中的 scripts 這個區塊怎麼用？

用來定義可執行的命令，命令名稱需唯一 ex:常見 `start:`啟動程式 `test`:測試程式

### Q3 Port number 要怎麼以環境變數來設定？

先用 `process.env`Node.js 中讀取環境變數，再用cmd輸入$env:PORT=4000; node app.js

### Q4 那些檔案要放上github?



