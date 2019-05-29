#!/bin/bash
gnome-terminal -x bash -c "cd knex; ../node_modules/knex/bin/cli.js migrate:rollback; ../node_modules/knex/bin/cli.js migrate:latest; ../node_modules/knex/bin/cli.js seed:run; exec $SHELL"