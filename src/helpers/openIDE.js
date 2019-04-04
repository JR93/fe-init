const shell = require('shelljs');

if (shell.which('code')) {
  shell.exec('code .');
} else if (shell.which('subl')) {
  shell.exec('subl .');
}
