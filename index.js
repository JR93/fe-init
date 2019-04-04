const yargs = require('yargs');

const argv = yargs
  .usage('fe-init [options]')
  .help()
  .version()
  .alias('v', 'version')
  .argv;

require('./src/init');

