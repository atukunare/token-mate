# English

**Open-source build, not paid-signed.** macOS and Windows will ask you to confirm on first launch — instructions below.

## What's changed

### Added
- Added Appearance theme controls with Default, Obsidian, and Porcelain presets, custom interface colours, and per-tool vendor colour overrides for charts and lists.
- Added detection-status tags to the tracked tool list, so Settings can show whether each enabled tool is active, waiting for data, or missing local data.
- Added main-view persistence, so the widget reopens on the last selected view instead of always returning to the default view.

### Improved
- Runs the today, month, and all-time tokscale scans concurrently, reducing refresh wait time when local usage data is large.
- Stops idle live-dot pulsing and skips no-op number animations, keeping the widget calmer when values have not changed.
- Localized the remaining main-view names and the breakdown toggle button.
- Updated bundled tokscale to 3.1.2.

## Which file should I download?

- **macOS (Apple Silicon, M1 and later)** — the `.dmg` file
- **Windows 10/11** — `Token Monitor Setup ….exe` (installer, recommended)
- **Windows portable** — `Token Monitor ….exe` (runs without installing)

Intel Macs and Linux are not pre-built — run from source per the [README](https://github.com/Javis603/token-monitor#readme). The macOS `.zip` is the same app repackaged; ignore it unless you specifically need it.

## First-launch unlock

**macOS:** right-click `Token Monitor.app` → Open (once). If you see "Token Monitor" can't be opened or is damaged:

```bash
xattr -dr com.apple.quarantine "/Applications/Token Monitor.app"
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

### 新增
- 新增外观主题控制，可选择默认、黑曜、瓷白预设，自定义界面颜色，并为图表和列表里的各工具设置厂商色。
- 新增已追踪工具的检测状态标签，可在设置中看到每个启用工具是正在检测、等待数据，还是缺少本地数据。
- 新增主界面记忆功能，小组件重新打开时会回到上次选择的视图，不再总是回到默认视图。

### 改进
- today、month、all-time 三个 tokscale 扫描现在会并行执行，本地用量数据较多时刷新等待更短。
- 停止空闲时的实时指示点脉冲，并跳过没有变化的数字动画，让小组件在数值不变时更安静。
- 补齐剩余主界面名称和明细切换按钮的本地化。
- 将内置 tokscale 更新到 3.1.2。

## 应该下载哪个文件？

- **macOS（苹果芯片，M1 及之后机型）** — 下载 `.dmg` 安装包
- **Windows 10/11** — 下载 `Token Monitor Setup ….exe`（安装版，推荐）
- **Windows 便携版** — 下载 `Token Monitor ….exe`（无需安装，直接运行）

Intel Mac 和 Linux 暂不提供预构建版本，请参考 [README](https://github.com/Javis603/token-monitor#readme) 从源码运行。macOS 的 `.zip` 只是同一个 app 的重新打包版本，除非你明确需要，否则可以忽略。

## 首次启动放行

**macOS：** 右键 `Token Monitor.app` → 打开（只需要一次）。如果看到「Token Monitor」未开启 或 已损坏：

```bash
xattr -dr com.apple.quarantine "/Applications/Token Monitor.app"
```

**Windows：** SmartScreen → 更多信息 → 仍要运行。

## tokscale 依赖

Tokscale 已随应用内置。你可以在 **设置 → Tokscale** 查看确切版本，
也可以直接从 npm 下载更新版本。Tokscale 是 MIT 开源项目：
https://github.com/junhoyeo/tokscale
