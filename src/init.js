const signale = require('signale');

const handler = require('./helpers/handleInput');
const createLocalProject = require('./helpers/createLocalProject');

(async () => {
  signale.fav('欢迎使用一键初始化项目');
  console.log();
  signale.info('使用之前请确保电脑已经保存 Gitlab 账户 的 HTTPS 凭证');
  console.log();
  // 平台类型项目
  const projectType = await handler.selectType();
  console.log();
  signale.info('请输入项目名');
  console.log();
  const projectName = await handler.projectName();
  console.log();
  signale.info('正为您创建项目模板');
  console.log();
  await createLocalProject({
    projectType,
    projectName
  });
  // 打开编辑器
  signale.info('创建成功，正为您打开IDE');
  console.log();
  require('./helpers/openIDE');
  signale.info('欢迎再次使用');
  process.exit(1);
})();
