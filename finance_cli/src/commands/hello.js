// 示例命令：用于验证脚手架可用。
// 实际业务命令（记账 / 行情 / 报表）后续在此目录新增文件。
import { Command } from 'commander';

/**
 * 返回一个配置好的 hello 子命令。
 * @returns {import('commander').Command}
 */
export function helloCommand() {
  return new Command('hello')
    .description('示例命令：验证脚手架可正常运行')
    .argument('[name]', '你的名字', 'world')
    .option('-u, --upper', '使用大写输出')
    .action((name, opts) => {
      const msg = `Hello, ${name}!  finance_cli 脚手架已就绪`;
      console.log(opts.upper ? msg.toUpperCase() : msg);
    });
}
