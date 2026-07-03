# English

**Open-source build, not paid-signed.** macOS and Windows will ask you to confirm on first launch — instructions below.

## What's changed

First public **Token Mate** release (`atukunare/token-mate`).

### Added
- Rebrand from upstream Token Monitor to **Token Mate** (app, docs, GitHub Pages).
- **Korean** UI strings and `README.ko.md`; GitHub Pages site locale (EN / KO / 简 / 繁).
- macOS **launchd** helpers (`npm run launchd:install`) for auto-start on login.
- DeepSeek API key persistence and saved-key panel in Settings.

### Fixed
- Menu bar limit display modes for Cursor / Antigravity fallbacks.
- OpenCode visibility toggle and related collector behavior from upstream merges.

## Which file should I download?

- **macOS (Apple Silicon, M1 and later)** — the `.dmg` file
- **Windows 10/11** — `Token Mate Setup ….exe` (installer, recommended)
- **Windows portable** — `Token Mate ….exe` (runs without installing)

Intel Macs and Linux are not pre-built — run from source per the [README](https://github.com/atukunare/token-mate#readme). The macOS `.zip` is the same app repackaged; ignore it unless you specifically need it.

## First-launch unlock

**macOS:** right-click `Token Mate.app` → Open (once). If you see "Token Mate" can't be opened or is damaged:

```bash
xattr -dr com.apple.quarantine "/Applications/Token Mate.app"
```

**Windows:** SmartScreen → More info → Run anyway.

## tokscale dependency

Tokscale is bundled with this app. See **Settings → Tokscale** for the exact version
and the option to download a newer version directly from npm. Tokscale is MIT,
open-source: https://github.com/junhoyeo/tokscale

---

# 中文

**这是开源构建，不是付费签名版本。** macOS 和 Windows 首次启动时会要求你手动确认，操作说明见下方。

## 更新内容

**Token Mate** 首个公开发布（`atukunare/token-mate`）。

### 新增
- 从上游 Token Monitor 更名为 **Token Mate**（应用、文档、GitHub Pages）。
- **韩语**界面与 `README.ko.md`；GitHub Pages 多语言（EN / KO / 简 / 繁）。
- macOS **launchd** 自启动脚本（`npm run launchd:install`）。
- DeepSeek API 密钥持久化与设置页已保存密钥面板。

### 修复
- Cursor / Antigravity 额度显示模式的菜单栏回退逻辑。
- 上游合并带来的 OpenCode 显示开关与采集器相关问题。

## 应该下载哪个文件？

- **macOS（苹果芯片，M1 及之后机型）** — 下载 `.dmg` 安装包
- **Windows 10/11** — 下载 `Token Mate Setup ….exe`（安装版，推荐）
- **Windows 便携版** — 下载 `Token Mate ….exe`（无需安装，直接运行）

Intel Mac 和 Linux 暂不提供预构建版本，请参考 [README](https://github.com/atukunare/token-mate#readme) 从源码运行。macOS 的 `.zip` 只是同一个 app 的重新打包版本，除非你明确需要，否则可以忽略。

## 首次启动放行

**macOS：** 右键 `Token Mate.app` → 打开（只需要一次）。如果看到「Token Mate」未开启 或 已损坏：

```bash
xattr -dr com.apple.quarantine "/Applications/Token Mate.app"
```

**Windows：** SmartScreen → 更多信息 → 仍要运行。

## tokscale 依赖

Tokscale 已随应用内置。你可以在 **设置 → Tokscale** 查看确切版本，
也可以直接从 npm 下载更新版本。Tokscale 是 MIT 开源项目：
https://github.com/junhoyeo/tokscale
