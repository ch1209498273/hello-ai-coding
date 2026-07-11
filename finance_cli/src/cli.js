// CLI 主程序：装配 commander 实例并注册所有子命令。
// 新增命令时，在 src/commands/ 下建一个返回 Command 的工厂函数，
// 然后在此处 import 并用 program.addCommand(...) 挂上即可。
import { Command } from 'commander';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { helloCommand } from './commands/hello.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  readFileSync(join(__dirname, '..', 'package.json'), 'utf-8')
);

/**
 * 构建 commander 程序实例。
 * 抽成函数便于后续做单元测试。
 * @returns {import('commander').Command}
 */
export function buildProgram() {
  const program = new Command();

  program
    .name('finance')
    .description('finance_cli —— 个人金融命令行工具（当前为脚手架阶段）')
    .version(pkg.version, '-V, --version', '显示版本号');

  // 注册子命令。后续命令在此追加。
  program.addCommand(helloCommand());

  return program;
}

// 直接运行时解析参数；捕获错误并以非零码退出。
const program = buildProgram();
program
  .parseAsync(process.argv)
  .catch((err) => {
    console.error(`执行出错: ${err.message}`);
    process.exit(1);
  });
