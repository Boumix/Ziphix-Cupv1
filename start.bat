@echo off
:loop
cls
echo demarrage...    
node index.js
timeout /t 5
goto loop