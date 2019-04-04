const shell = require('shelljs');
const signale = require('signale');

module.exports = ({ projectType, projectName }) => {
  return new Promise((resolve, reject) => {
    if (!shell.which('git')) {
      signale.error('找不到 git 命令，请先安装 git！');
      shell.exit(1);
    }
    const templateName = `${projectType}-template`;
    const gitBaseUrl = `git@git.xxx.com:fedoc/`;
    shell.exec(`git clone ${gitBaseUrl}${templateName}.git`, { silent: true }, (code, stdout, stderr) => {
      // console.log(code, stdout, stderr)
      if (code === 128) {
        signale.error('目录已存在！请先手动删除！');
        shell.exit(1);
      } else if (code !== 0) {
        signale.error('有点问题！请联系开发者！');
        shell.exit(1);
      }

      shell.mv(templateName, projectName);
      shell.cd(projectName);
      shell.rm('-rf', '.git');
      shell.exec('git init', { silent: true });
      shell.exec(`git remote add origin https://git.xxx.com/xxx/xxx/${projectName}.git`);
      shell.exec('git add .');
      shell.exec('git commit -m "initialize project"');
      shell.exec('git push -u origin master');
      shell.exec('git checkout -b test');
      shell.exec('git push -u origin test');
      shell.exec('git checkout -b dev');
      shell.exec('git push -u origin dev');
      signale.success(`已生成 ${projectName} 目录！`);
      console.log();
      resolve();
    });
  });
};
