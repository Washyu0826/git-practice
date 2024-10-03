### Q1 package.json 中的 dependencies 與 devDependencies 分別是什麼？

***dependencies:*** 包含的程式運行所需套件(生產環境) Ex:HTTP請求所需的express會列在其中

***devDependencies:*** 包含開發過程所需套件(測試、開發工具) Ex:jest(測試框架)會列在其中

### Q2 package.json 中的 scripts 這個區塊怎麼用？

用來定義可執行的命令，命令名稱需唯一 Ex:常見 `start:`啟動程式 `test`:測試程式

### Q3 Port number 要怎麼以環境變數來設定？

先用 `process.env`Node.js 中讀取環境變數，再用cmd輸入$env:PORT=4000; node app.js

### Q4 那些檔案要放上github?

放: `app.js`:程式基本結構/`package.json`:專案原始版本和數據的內容/source code/配置檔/測試檔

不放:`.env`/`node_modules`

判斷依據:其他編輯者是否能憑藉相關資訊完成開發，一些個人化設置和訊息不用上傳

### Q5 CJS vs ESM 的比較

| 特性            | CommonJS (CJS) |  ES Modules (ESM) |
|-----------------|----------------|-------------------|
| 引入模組的方式   |  const module = require('module')  | import module from 'module'               |
| 導出模組的方式   | module.exports = value             | export default value                |
| 加載方式        | 同步	           | 非同步              |
| 檔案擴展名        | 通常使用 .js             | 通常使用 .js              |
| 樹搖（Tree Shaking）        | 不支援           | 支援                |
| 環境支持       | Node.js及舊瀏覽器             | Node.js及當今瀏覽器                |

### Q6 localhost 是什麼？

***本地伺服器***允許開發者和使用者與自己電腦上的網路服務進行互動，而不用實際網路連接到其他設備 

常用於測試: Ex:啟動Express.js並使用http://localhost:3000 訪問

### Q7 curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？

***curl*** 是一種命令行工具，用在命令行界面中發送 HTTP 請求和接收回應，特別是RESTful API 開發，支援多種協定 Ex:HTTP、HTTPS、FTP

最簡單的測試方法:基本 ***Get***請求 curl http://localhost:3000

常用參數:-X：指定 HTTP 請求方法（如 GET、POST、PUT、DELETE）。

-d：發送數據，通常用於 POST 請求。可以用來發送表單數據或JSON

-H：添加自定義 HTTP 標頭，通常用於設置內容類型或身份驗證

-i：顯示回應的 HTTP 標頭，常用於調試

-v：啟用詳細模式，顯示請求和回應的詳細信息，包括標頭和連接信息

-o：將回應寫入指定的檔案，而不是顯示在終端上。

