# AGENTS.md

本文件为 AI 编码代理（Claude Code、Cursor、WorkBuddy 等）在本仓库工作提供指引。

## 项目概述

**InkClass** 是一个面向小学五年级语文教学的数字化项目，由家长驱动，构建"教材 + 视频 + 写作"三位一体的学习资源库。这是一个**纯静态前端项目**（HTML/CSS/JS），无构建步骤、无包管理器、无后端依赖。

## 项目结构

```
InkClass/
├── 五上语文第二单元/            # 第二单元互动课文页面
│   ├── index.html              # 单元入口页
│   ├── images/                 # 课文配图（按 unit 前缀命名：u1_、u2_…u8_）
│   ├── js/                     # unit5.js ~ unit8.js，各单元逻辑
│   └── fonts/                  # 自托管字体（kbkai.woff2 楷体）
├── 漫画老师写作提纲.html         # 习作单元"漫画老师"写作指导
├── README.md
└── AGENTS.md
```

## 关键约定

- **中文文件名是刻意为之**：面向小学生的中文内容，文件名保持中文直读。git 已配置引号转义，操作时直接使用中文路径即可，**不要**重命名为拼音/英文。
- **无框架、无构建**：修改 `.html` / `.js` 后即为完成，直接提交，不存在编译/打包/测试步骤。
- **B站视频嵌入**：使用 iframe 方案（`//player.bilibili.com/player.html?bvid=...`），已验证可行；嵌入时注意 `scrolling`、`sandbox` 与 autoplay 策略。
- **图片资源**：新增课文配图放入对应单元的 `images/` 目录，命名沿用 `u{单元号}_{内容}.jpg` 小写约定。

## Git 工作流

- 远程：`ssh://git@ssh.github.com:443/badliuyichao/InkClass.git`（**443 端口 SSH**，22 端口在此网络环境下超时）
- 主分支：`main`，已设置上游跟踪
- **已知网络问题**：推送/拉取可能遇到 `Connection reset`（约 50% 概率），**重试 1~3 次即可成功**，不要视为权限或配置错误
- HTTPS 远程在本机不可用（代理对 github.com 返回 502），不要切换 remote
- 提交信息用简洁英文祈使句，如 `Add unit 5 reading page`
- `.workbuddy/` 与 `.wbapp_*.genie` 已在 `.gitignore` 中排除，不要强行提交

## 禁止事项

- 不要引入 Node/npm/构建工具链——保持零依赖静态站
- 不要删除或修改 `LICENSE`（MIT）
- 不要把 `.workbuddy/` 内的会话数据、记忆文件提交进仓库
