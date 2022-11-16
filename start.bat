@ECHO OFF
title "PRESTIGE BIKE" 
start cmd.exe title "PRESTIGE BIKE WEBSITE" /k "npm start"
start cmd.exe title "PRESTIGE BIKE SERVER" /k "npx json-server --watch data.json --port 3001"