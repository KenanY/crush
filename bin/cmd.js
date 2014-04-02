#!/usr/bin/env node

var mediacrush = require('mediacrush');
var argv = require('minimist')(process.argv.slice(2));

mediacrush.uploadURL(argv._[0], function(err, data) {
  if (err) {
    throw err;
  }
  process.stdout.write('\n');
  process.stdout.write('https://mediacru.sh/' + data.hash);
  process.stdout.write('\n');
});