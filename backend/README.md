### Q1 package.json 中的 dependencies 與 devDependencies 分別是什麼？

***dependencies:*** 包含的程式運行所需套件(生產環境) ex:HTTP請求所需的express會列在其中

***devDependencies:*** 包含開發過程所需套件(測試、開發工具) ex:jest(測試框架)會列在其中

### Q2 package.json 中的 scripts 這個區塊怎麼用？

用來定義可執行的命令，命令名稱需唯一 ex:常見 `start:`啟動程式 `test`:測試程式

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
