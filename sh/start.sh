#! /bin/bash
forever  -a -l $PWD/tmp/forever.log -o $PWD/tmp/stdout.log -e $PWD/tmp/stderr.log -w  start app.js
tail -f $PWD/tmp/forever.log
