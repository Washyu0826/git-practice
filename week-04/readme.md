`/etc：` "et cetera" 的縮寫，通常存放系統全局配置檔案和設定檔。

ex: 網路配置（/etc/network）、用戶帳號資料（/etc/passwd）、服務配置檔案（/etc/ssh/sshd_config）。

`/var：`  通常存放經常變動的資料。

ex：系統運行中的日誌檔案（/var/log）、郵件隊列、暫存檔案、排程任務等。資料可能隨時間變長。

`/boot：` 通常存放包含與系統啟動有關的檔案。

ex: Linux 核心映像檔（vmlinuz）和引導載入器（如 grub 的配置檔案）。這些檔案在系統啟動過程中被用來載入作業系統的kernel。

`$PATH 環境變數:` 是系統搜尋執行檔路徑的列表。當你在terminal輸入一個指令時，系統會按照 $PATH 指定的路徑順序去搜尋這個指令的執行檔案。

ex: 執行 ls，系統會在 $PATH 定義的目錄中找尋 ls 的程式。

`which 指令：` 用來顯示某命令執行檔案的絕對路徑。它會依據當前的 $PATH 環境變數，找出命令實際路徑。

ex: 輸入 which python 會顯示 Python 執行檔的路徑。
