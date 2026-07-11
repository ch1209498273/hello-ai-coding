# finance-cli

个人金融命令行工具。**当前为脚手架阶段**，仅包含命令注册骨架与一个示例命令。

> 所属仓库：`vibecoding测试项目` 的子项目 `finance_cli/`，随根仓库一起提交（不单独建 git 仓库）。
> 远程：`git@github.com:ch1209498273/hello-ai-coding.git`（SSH）。

## 运行环境

- Node.js >= 18（开发用受管 Node 22）

## 安装依赖

```bash
cd finance_cli
npm install        # 仅 commander，本地 node_modules 已被 .gitignore 忽略
```

## 使用

```bash
node bin/finance.js --help          # 查看帮助
node bin/finance.js hello           # 示例命令（默认 name=world）
node bin/finance.js hello 芦老师 -u  # 示例命令，大写输出
node bin/finance.js -V              # 版本号
```

## 目录结构

```
finance_cli/
├── bin/
│   └── finance.js          # 可执行入口（shebang），加载 src/cli.js
├── src/
│   ├── cli.js              # 装配 commander，注册子命令
│   └── commands/
│       └── hello.js        # 示例命令（验证脚手架）
├── package.json
└── README.md
```

## 如何新增一个命令

1. 在 `src/commands/` 下新建文件，导出一个返回 `Command` 的工厂函数：
   ```js
   import { Command } from 'commander';
   export function myCommand() {
     return new Command('my')
       .description('...')
       .action(() => { /* ... */ });
   }
   ```
2. 在 `src/cli.js` 中 `import { myCommand } from './commands/my.js';` 并 `program.addCommand(myCommand());`
3. 测试：`node bin/finance.js my --help`
