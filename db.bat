@echo off
title db configurator 
start cmd.exe /k "cd knex & node ..\node_modules\knex\bin\cli.js migrate:rollback & node ..\node_modules\knex\bin\cli.js migrate:latest & node ..\node_modules\knex\bin\cli.js seed:run"
