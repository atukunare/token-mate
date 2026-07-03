/* i18n.js: translations + language resolution. No auto-run; main.js drives it. */
var supportedLanguages = ["en", "zh-TW", "zh-CN", "ko"];
var languageStorageKey = "token-mate-site-language";

var translations = {
  en: {
    "meta.title": "Token Mate: AI Tools usage at a glance",
    "meta.description": "Token Mate is a local-first desktop widget for real-time token, cost, limit, and session monitoring across AI Tools.",
    "meta.ogTitle": "Token Mate",
    "meta.ogDescription": "Local-first token, cost, limit, and session monitoring for AI Tools.",
    "nav.skip": "Skip to content",
    "nav.primary": "Primary",
    "nav.home": "Token Mate home",
    "nav.language": "Language",
    "nav.theme": "Toggle light or dark theme",
    "nav.github": "GitHub",
    "nav.sections": "Section navigation",
    "nav.features": "Features",
    "nav.privacy": "Privacy",
    "nav.download": "Download",

    "hero.eyebrow": "Local-first AI coding telemetry",
    "hero.title": "AI Tools usage at a glance",
    "hero.lede": "A local-first desktop widget for real-time token, cost, limit, session, and trend monitoring across AI Tools.",
    "hero.actions": "Primary actions",
    "hero.platforms": "Supported platforms",
    "cta.download": "Download latest release",
    "cta.github": "View on GitHub",

    "tools.eyebrow": "Tracks every tool in your loop",

    "feature.title": "Tokens, limits, trends, and session detail in one view.",
    "feature.live.title": "Live token tracking & cost",
    "feature.live.body": "Watch Claude Code, Codex, Hermes, OpenCode, OpenClaw, Cursor, Antigravity, and Cline update within seconds of each turn, with cost and cache-hit rates alongside every count — themed light or dark to match your setup.",
    "feature.limits.title": "AI Tool Limits before you hit the wall",
    "feature.limits.body": "See Claude Code, Codex, Cursor, Antigravity, OpenCode, and DeepSeek session, weekly, billing, credits, and balance windows, so a limit never surprises you mid-task.",
    "feature.session.title": "Per-session detail on demand",
    "feature.session.body": "Open a Claude Code, Codex, or OpenCode session to see tokens per prompt and per reply, read on-demand from local transcripts or databases. Never synced.",
    "feature.trends.title": "A year of trends, inside the widget",
    "feature.trends.body": "Flip to the Trends view for a twelve-month sparkline with active days, streaks, and your peak day, without leaving the widget. The full dashboard below goes deeper.",
    "feature.status.title": "Provider status, right in the widget",
    "feature.status.body": "Watch Claude, OpenAI, Cursor, and DeepSeek service status without leaving the widget. Each card leads with the active incident title and the count of affected components, and re-checks on your chosen interval.",

    "dash.title": "A year of AI coding, charted.",
    "dash.lede": "Turn on opt-in history and Token Mate opens a full dashboard window: a GitHub-style activity heatmap with streaks, plus per-tool and per-model usage stacked over time in bar and K-line views, rolled up across all your devices.",
    "mock.you": "YOU",
    "mock.newest": "↕ Newest",
    "mock.session.one": "Compare model spend...",
    "mock.session.two": "Inspect reply details...",

    "surfaces.title": "The same usage, on every surface you already use.",
    "surfaces.menubar.title": "Menu bar & tray",
    "surfaces.menubar.body": "Live cost, tokens, or your closest limit % right next to the clock on macOS and Windows.",
    "surfaces.bubble.title": "Floating Bubble",
    "surfaces.bubble.body": "Collapse the widget into a draggable mini-window with click or hover preview.",
    "surfaces.discord.playing": "Playing",
    "surfaces.discord.title": "Discord Rich Presence",
    "surfaces.discord.body": "Broadcast today's tokens, cost, and top tool to your profile. Opt-in.",
    "surfaces.ios.title": "iOS widget",
    "surfaces.ios.body": "Today's totals on your Home Screen via the Worker hub, with Widgy or Scriptable.",

    "how.title": "Start with one widget. Add a hub for multi-device sync.",
    "how.lede": "Local stays the default path. Add self-hosted sync when you want token usage from multiple devices rolled into one view.",
    "how.local.title": "Local mode",
    "how.local.body": "The widget reads local usage summaries through tokscale and renders them on the same machine. No account, no cloud.",
    "how.pivot.note": "There is no mode toggle. Paste a hub URL and the widget starts syncing; clear the field and everything stays on this machine.",
    "how.sync.title": "Sync mode",
    "how.sync.body": "Each widget or headless agent posts that device's usage summary to your hub, which merges totals and streams them back to every connected widget.",
    "how.node.widget": "Widget",
    "how.node.tokscale": "tokscale",
    "how.node.localLogs": "Local AI logs",
    "how.node.mac": "Mac widget",
    "how.node.windows": "Windows widget",
    "how.node.agent": "Headless agent",
    "how.node.hub": "Self-hosted hub",
    "how.node.summaryStream": "Summary stream",
    "how.backends": "Pick a sync backend; all three speak the same ingest protocol.",
    "how.backends.label": "Self-hostable sync backends",
    "how.backend.widget": "In-widget hub",
    "how.backend.node": "Node CLI hub",
    "how.backend.worker": "Cloudflare Worker",

    "privacy.title": "Your code and conversations are not the product.",
    "privacy.body": "Token Mate syncs only the fields needed to show totals, costs, tool and model breakdowns, and normalized account limit status.",
    "privacy.payload.cap": "The entire record a hub ever receives: counts, costs, labels, and limit percentages. The account behind each limit is a one-way hash, never the login itself.",
    "privacy.never": "Never syncs",
    "privacy.never.1": "Raw prompts or source files",
    "privacy.never.2": "Conversation transcripts",
    "privacy.never.3": "OAuth credentials or provider responses",

    "final.title": "Download the packaged app and keep every coding tool visible.",
    "final.readme": "Read the setup guide",
    "final.downloads": "Release download options",
    "final.mac.title": "macOS .dmg",
    "final.mac.body": "Apple Silicon, M1 and later",
    "final.win.title": "Windows Setup .exe",
    "final.win.body": "Installer build, recommended",
    "final.source": "Intel Mac, Linux, and source installs are covered in the README for advanced setups.",

    "footer.api": "API docs",
    "footer.worker": "Worker docs",
    "footer.license": "License"
  },

  "zh-TW": {
    "meta.title": "Token Mate：AI Tools 用量一眼看清",
    "meta.description": "Token Mate 是為 AI Tools 打造的本地優先桌面 widget，可即時監控 token、成本與限額，查看 session 明細，並透過自架 hub 同步多台裝置。",
    "meta.ogTitle": "Token Mate",
    "meta.ogDescription": "為 AI Tools 打造的本地優先 token、成本、限額與 session 監控。",
    "nav.skip": "跳到內容",
    "nav.primary": "主要導覽",
    "nav.home": "Token Mate 首頁",
    "nav.language": "語言",
    "nav.theme": "切換淺色或深色主題",
    "nav.github": "GitHub",
    "nav.sections": "區塊導覽",
    "nav.features": "功能",
    "nav.privacy": "隱私",
    "nav.download": "下載",

    "hero.eyebrow": "本地優先的 AI coding telemetry",
    "hero.title": "AI Tools 用量一眼看清",
    "hero.lede": "為 AI Tools 打造的桌面 widget，即時監控 token、成本、限額、session 與歷史趨勢。",
    "hero.actions": "主要操作",
    "hero.platforms": "支援平台",
    "cta.download": "下載最新版本",
    "cta.github": "查看 GitHub",

    "tools.eyebrow": "涵蓋你工作流裡的每個工具",

    "feature.title": "Token、限制、趨勢與 session 明細，集中在一個畫面。",
    "feature.live.title": "即時 token 追蹤與成本",
    "feature.live.body": "Claude Code、Codex、Hermes、OpenCode、OpenClaw、Cursor、Antigravity、Cline 每輪對話後數秒內更新，每個數字旁都有成本與 cache 命中率，並可切換淺色或深色主題。",
    "feature.limits.title": "在撞牆前看見 AI Tool Limits",
    "feature.limits.body": "看見 Claude Code、Codex、Cursor、Antigravity、OpenCode、DeepSeek 的 session、每週、帳單、credits 與餘額視窗，限制不再在工作中途突襲你。",
    "feature.session.title": "需要時才看 session 明細",
    "feature.session.body": "打開 Claude Code、Codex 或 OpenCode session，看每個 prompt 與 reply 的 token；從本機 transcript 或資料庫即時讀取，永不同步。",
    "feature.trends.title": "一年的趨勢，就在 widget 裡",
    "feature.trends.body": "切到 Trends 視圖，不用離開 widget 就能看到 12 個月的用量長條、活躍天數、連續天數與單日高峰。想看更深入的，往下捲到完整 dashboard。",
    "feature.status.title": "服務狀態，就在 widget 裡",
    "feature.status.body": "不必離開 widget，就能查看 Claude、OpenAI、Cursor 與 DeepSeek 的服務狀態。每張卡片以進行中的事件標題與受影響元件數開頭，並依你設定的間隔重新檢查。",

    "dash.title": "把一年的 AI coding 畫成圖。",
    "dash.lede": "開啟可選的歷史收集，Token Mate 會打開完整的 dashboard 視窗：GitHub 風格的活動熱力圖與連續天數，加上隨時間堆疊的各工具、各模型用量，提供長條圖與 K 線兩種檢視，並彙整你所有裝置。",
    "mock.you": "你",
    "mock.newest": "↕ 最新",
    "mock.session.one": "比較模型成本...",
    "mock.session.two": "查看 reply 明細...",

    "surfaces.title": "同一份用量，出現在你本來就在用的每個介面。",
    "surfaces.menubar.title": "menu bar 與工作列",
    "surfaces.menubar.body": "macOS 與 Windows 時鐘旁就有即時成本、tokens 或最接近的限制 %。",
    "surfaces.bubble.title": "Floating Bubble",
    "surfaces.bubble.body": "把 widget 收成可拖曳的迷你視窗，支援點擊或 hover 預覽。",
    "surfaces.discord.playing": "正在遊玩",
    "surfaces.discord.title": "Discord Rich Presence",
    "surfaces.discord.body": "把今日 tokens、成本與最常用工具廣播到你的個人檔案，可選開啟。",
    "surfaces.ios.title": "iOS 小工具",
    "surfaces.ios.body": "透過 Worker hub，用 Widgy 或 Scriptable 把今日總量放到主畫面。",

    "how.title": "先用一個 widget。要同步多台裝置時才加 hub。",
    "how.lede": "本地仍是預設路徑。想彙整多台裝置的 Token 用量時，再加一層自架同步。",
    "how.local.title": "本地模式",
    "how.local.body": "Widget 透過 tokscale 讀取本機用量摘要，並在同一台機器上顯示。不需要帳號、不需要雲端。",
    "how.pivot.note": "沒有模式開關。貼上 hub 網址，widget 就開始同步；清空欄位，一切就留在這台機器上。",
    "how.sync.title": "同步模式",
    "how.sync.body": "每個 widget 或 headless agent 會把該裝置的用量摘要送到你的 hub，hub 彙整後再串流回所有已連線 widget。",
    "how.node.widget": "Widget",
    "how.node.tokscale": "tokscale",
    "how.node.localLogs": "本機 AI logs",
    "how.node.mac": "Mac widget",
    "how.node.windows": "Windows widget",
    "how.node.agent": "Headless agent",
    "how.node.hub": "自架 hub",
    "how.node.summaryStream": "摘要串流",
    "how.backends": "同步後端三選一，都走同一套 ingest 協定。",
    "how.backends.label": "可自架的同步後端",
    "how.backend.widget": "widget 內建 hub",
    "how.backend.node": "Node CLI hub",
    "how.backend.worker": "Cloudflare Worker",

    "privacy.title": "你的程式碼與對話不是產品。",
    "privacy.body": "Token Mate 只同步顯示總量、成本、工具與模型拆分，以及標準化帳戶限制所需的欄位。",
    "privacy.payload.cap": "這就是 hub 收到的完整紀錄：數字、成本、標籤與限制百分比。每個限制背後的帳戶都是單向 hash，永遠不是登入身分本身。",
    "privacy.never": "永不同步",
    "privacy.never.1": "原始提示詞或原始碼",
    "privacy.never.2": "對話 transcript",
    "privacy.never.3": "OAuth 憑證或 provider 回應",

    "final.title": "下載打包好的 App，讓每個 coding 工具的用量都看得見。",
    "final.readme": "閱讀設定指南",
    "final.downloads": "Release 下載選項",
    "final.mac.title": "macOS .dmg",
    "final.mac.body": "Apple Silicon，M1 或更新機型",
    "final.win.title": "Windows Setup .exe",
    "final.win.body": "建議使用安裝版",
    "final.source": "Intel Mac、Linux 與原始碼啟動方式請看 README，適合進階設定。",

    "footer.api": "API 文件",
    "footer.worker": "Worker 文件",
    "footer.license": "授權"
  },

  "zh-CN": {
    "meta.title": "Token Mate：AI Tools 用量一眼看清",
    "meta.description": "Token Mate 是为 AI Tools 打造的本地优先桌面组件，可实时监控 token、成本与限额，查看 session 明细，并通过自托管 hub 同步多台设备。",
    "meta.ogTitle": "Token Mate",
    "meta.ogDescription": "为 AI Tools 打造的本地优先 token、成本、限额与 session 监控。",
    "nav.skip": "跳到内容",
    "nav.primary": "主要导航",
    "nav.home": "Token Mate 首页",
    "nav.language": "语言",
    "nav.theme": "切换浅色或深色主题",
    "nav.github": "GitHub",
    "nav.sections": "区块导航",
    "nav.features": "功能",
    "nav.privacy": "隐私",
    "nav.download": "下载",

    "hero.eyebrow": "本地优先的 AI coding telemetry",
    "hero.title": "AI Tools 用量一眼看清",
    "hero.lede": "为 AI Tools 打造的桌面组件，实时监控 token、成本、限额、session 与历史趋势。",
    "hero.actions": "主要操作",
    "hero.platforms": "支持平台",
    "cta.download": "下载最新版本",
    "cta.github": "查看 GitHub",

    "tools.eyebrow": "覆盖你工作流里的每个工具",

    "feature.title": "Token、限制、趋势与 session 明细，集中在一个界面。",
    "feature.live.title": "实时 token 追踪与成本",
    "feature.live.body": "Claude Code、Codex、Hermes、OpenCode、OpenClaw、Cursor、Antigravity、Cline 每轮对话后数秒内更新，每个数字旁都有成本与 cache 命中率，并可切换浅色或深色主题。",
    "feature.limits.title": "在撞墙前看见 AI Tool Limits",
    "feature.limits.body": "看见 Claude Code、Codex、Cursor、Antigravity、OpenCode、DeepSeek 的 session、每周、账单、credits 与余额窗口，限制不再在工作中途突袭你。",
    "feature.session.title": "需要时才看 session 明细",
    "feature.session.body": "打开 Claude Code、Codex 或 OpenCode session，看每个 prompt 与 reply 的 token；从本机 transcript 或数据库实时读取，永不同步。",
    "feature.trends.title": "一年的趋势，就在 widget 里",
    "feature.trends.body": "切到 Trends 视图，不用离开 widget 就能看到 12 个月的用量柱状、活跃天数、连续天数与单日峰值。想看更深入的，往下滚到完整 dashboard。",
    "feature.status.title": "服务状态，就在 widget 里",
    "feature.status.body": "不必离开 widget，就能查看 Claude、OpenAI、Cursor 与 DeepSeek 的服务状态。每张卡片以进行中的事件标题与受影响组件数开头，并按你设定的间隔重新检查。",

    "dash.title": "把一年的 AI coding 画成图。",
    "dash.lede": "开启可选的历史收集，Token Mate 会打开完整的 dashboard 窗口：GitHub 风格的活动热力图与连续天数，加上随时间堆叠的各工具、各模型用量，提供柱状图与 K 线两种视图，并汇总你所有设备。",
    "mock.you": "你",
    "mock.newest": "↕ 最新",
    "mock.session.one": "比较模型成本...",
    "mock.session.two": "查看 reply 明细...",

    "surfaces.title": "同一份用量，出现在你本来就在用的每个界面。",
    "surfaces.menubar.title": "menu bar 与任务栏",
    "surfaces.menubar.body": "macOS 与 Windows 时钟旁就有实时成本、tokens 或最接近的限制 %。",
    "surfaces.bubble.title": "Floating Bubble",
    "surfaces.bubble.body": "把 widget 收成可拖拽的迷你窗口，支持点击或 hover 预览。",
    "surfaces.discord.playing": "正在玩",
    "surfaces.discord.title": "Discord Rich Presence",
    "surfaces.discord.body": "把今日 tokens、成本与最常用工具广播到你的个人资料，可选开启。",
    "surfaces.ios.title": "iOS 小组件",
    "surfaces.ios.body": "通过 Worker hub，用 Widgy 或 Scriptable 把今日总量放到主屏幕。",

    "how.title": "先用一个 widget。要同步多台设备时才加 hub。",
    "how.lede": "本地仍是默认路径。想汇总多台设备的 Token 用量时，再加一层自托管同步。",
    "how.local.title": "本地模式",
    "how.local.body": "Widget 通过 tokscale 读取本机用量摘要，并在同一台机器上显示。不需要账号、不需要云端。",
    "how.pivot.note": "没有模式开关。粘贴 hub 网址，widget 就开始同步；清空字段，一切就留在这台机器上。",
    "how.sync.title": "同步模式",
    "how.sync.body": "每个 widget 或 headless agent 会把该设备的用量摘要送到你的 hub，hub 汇总后再流式推送回所有已连接 widget。",
    "how.node.widget": "Widget",
    "how.node.tokscale": "tokscale",
    "how.node.localLogs": "本机 AI logs",
    "how.node.mac": "Mac widget",
    "how.node.windows": "Windows widget",
    "how.node.agent": "Headless agent",
    "how.node.hub": "自托管 hub",
    "how.node.summaryStream": "摘要流",
    "how.backends": "同步后端三选一，都走同一套 ingest 协定。",
    "how.backends.label": "可自托管的同步后端",
    "how.backend.widget": "widget 内置 hub",
    "how.backend.node": "Node CLI hub",
    "how.backend.worker": "Cloudflare Worker",

    "privacy.title": "你的代码与对话不是产品。",
    "privacy.body": "Token Mate 只同步显示总量、成本、工具与模型拆分，以及标准化账号限制所需的字段。",
    "privacy.payload.cap": "这就是 hub 收到的完整记录：数字、成本、标签与限制百分比。每个限制背后的账号都是单向 hash，永远不是登录身份本身。",
    "privacy.never": "永不同步",
    "privacy.never.1": "原始提示词或源码",
    "privacy.never.2": "对话 transcript",
    "privacy.never.3": "OAuth 凭证或 provider 响应",

    "final.title": "下载打包好的 App，让每个 coding 工具的用量都看得见。",
    "final.readme": "阅读设置指南",
    "final.downloads": "Release 下载选项",
    "final.mac.title": "macOS .dmg",
    "final.mac.body": "Apple Silicon，M1 或更新机型",
    "final.win.title": "Windows Setup .exe",
    "final.win.body": "建议使用安装版",
    "final.source": "Intel Mac、Linux 与源码启动方式请看 README，适合进阶设置。",

    "footer.api": "API 文档",
    "footer.worker": "Worker 文档",
    "footer.license": "许可证"
  },

  ko: {
    "meta.title": "Token Mate: AI 코딩 도구 사용량 한눈에",
    "meta.description": "Token Mate는 AI 코딩 도구의 토큰, 비용, 한도, 세션을 실시간으로 모니터링하는 로컬 우선 데스크톱 위젯입니다.",
    "meta.ogTitle": "Token Mate",
    "meta.ogDescription": "AI 코딩 도구를 위한 로컬 우선 토큰·비용·한도·세션 모니터링.",
    "nav.skip": "본문으로 건너뛰기",
    "nav.primary": "주요 탐색",
    "nav.home": "Token Mate 홈",
    "nav.language": "언어",
    "nav.theme": "밝은/어두운 테마 전환",
    "nav.github": "GitHub",
    "nav.sections": "섹션 탐색",
    "nav.features": "기능",
    "nav.privacy": "프라이버시",
    "nav.download": "다운로드",

    "hero.eyebrow": "로컬 우선 AI 코딩 텔레메트리",
    "hero.title": "AI 코딩 도구 사용량 한눈에",
    "hero.lede": "AI 코딩 도구의 토큰, 비용, 한도, 세션, 추세를 실시간으로 보는 로컬 우선 데스크톱 위젯입니다.",
    "hero.actions": "주요 작업",
    "hero.platforms": "지원 플랫폼",
    "cta.download": "최신 릴리스 다운로드",
    "cta.github": "GitHub에서 보기",

    "tools.eyebrow": "워크플로의 모든 도구를 추적",

    "feature.title": "토큰, 한도, 추세, 세션 상세를 한 화면에.",
    "feature.live.title": "실시간 토큰 추적 및 비용",
    "feature.live.body": "Claude Code, Codex, Hermes, OpenCode, OpenClaw, Cursor, Antigravity, Cline이 매 턴마다 수 초 내 갱신되며, 비용과 캐시 히트율이 함께 표시됩니다. 밝은/어두운 테마를 지원합니다.",
    "feature.limits.title": "한도에 닿기 전에 AI Tool Limits 확인",
    "feature.limits.body": "Claude Code, Codex, Cursor, Antigravity, OpenCode, DeepSeek의 session, weekly, billing, credits, balance 창을 확인해 작업 중 갑작스러운 제한을 피할 수 있습니다.",
    "feature.session.title": "필요할 때만 세션 상세 보기",
    "feature.session.body": "Claude Code, Codex, OpenCode 세션에서 프롬프트·응답별 토큰을 확인합니다. 로컬 transcript/DB에서 필요할 때만 읽으며 동기화하지 않습니다.",
    "feature.trends.title": "1년 추세, 위젯 안에서",
    "feature.trends.body": "Trends 보기로 12개월 사용량, 활동 일수, 연속 일수, peak day를 위젯을 떠나지 않고 확인할 수 있습니다. 더 깊은 분석은 아래 대시보드를 참고하세요.",
    "feature.status.title": "위젯 안에서 제공자 상태 확인",
    "feature.status.body": "Claude, OpenAI, Cursor, DeepSeek 서비스 상태를 위젯에서 확인합니다. 각 카드는 진행 중인 incident와 영향받은 컴포넌트 수를 보여 주며, 설정한 간격으로 다시 확인합니다.",

    "dash.title": "1년간의 AI 코딩을 차트로.",
    "dash.lede": "옵트인 사용 기록을 켜면 Token Mate가 전체 대시보드 창을 엽니다. GitHub 스타일 활동 히트맵, 연속 일수, 기기 전체 도구/모델별 누적 사용(막대·K선)을 제공합니다.",
    "mock.you": "나",
    "mock.newest": "↕ 최신",
    "mock.session.one": "모델 비용 비교...",
    "mock.session.two": "응답 상세 보기...",

    "surfaces.title": "같은 사용량, 이미 쓰는 모든 화면에.",
    "surfaces.menubar.title": "메뉴 막대 & 트레이",
    "surfaces.menubar.body": "macOS와 Windows 시계 옆에 실시간 비용, 토큰, 또는 가장 가까운 한도 %를 표시합니다.",
    "surfaces.bubble.title": "Floating Bubble",
    "surfaces.bubble.body": "위젯을 드래그 가능한 미니 창으로 접고, 클릭/호버 미리보기를 지원합니다.",
    "surfaces.discord.playing": "플레이 중",
    "surfaces.discord.title": "Discord Rich Presence",
    "surfaces.discord.body": "오늘 토큰, 비용, 주요 도구를 프로필에 표시합니다. 옵트인.",
    "surfaces.ios.title": "iOS 위젯",
    "surfaces.ios.body": "Worker hub와 Widgy 또는 Scriptable로 홈 화면에 오늘 합계를 표시합니다.",

    "how.title": "위젯 하나로 시작. 여러 기기를 묶을 때 hub 추가.",
    "how.lede": "기본은 로컬입니다. 여러 기기의 토큰 사용량을 한곳에 모을 때만 자체 호스트 동기화를 추가하세요.",
    "how.local.title": "로컬 모드",
    "how.local.body": "위젯이 tokscale로 로컬 사용량 요약을 읽고 같은 기기에 표시합니다. 계정도, 클라우드도 필요 없습니다.",
    "how.pivot.note": "모드 전환 스위치는 없습니다. hub URL을 붙이면 동기화가 시작되고, 비우면 모든 것이 이 기기에만 남습니다.",
    "how.sync.title": "동기화 모드",
    "how.sync.body": "각 위젯 또는 headless agent가 기기별 사용량 요약을 hub로 보내고, hub가 합산해 연결된 모든 위젯으로 스트리밍합니다.",
    "how.node.widget": "Widget",
    "how.node.tokscale": "tokscale",
    "how.node.localLogs": "로컬 AI logs",
    "how.node.mac": "Mac widget",
    "how.node.windows": "Windows widget",
    "how.node.agent": "Headless agent",
    "how.node.hub": "자체 호스트 hub",
    "how.node.summaryStream": "요약 스트림",
    "how.backends": "동기화 백엔드 세 가지 중 하나를 고르세요. ingest 프로토콜은 동일합니다.",
    "how.backends.label": "자체 호스트 가능한 sync backend",
    "how.backend.widget": "위젯 내장 hub",
    "how.backend.node": "Node CLI hub",
    "how.backend.worker": "Cloudflare Worker",

    "privacy.title": "코드와 대화가 제품이 아닙니다.",
    "privacy.body": "Token Mate는 총량, 비용, 도구/모델 분류, 정규화된 계정 한도 표시에 필요한 필드만 동기화합니다.",
    "privacy.payload.cap": "hub가 받는 전체 레코드는 숫자, 비용, 라벨, 한도 %뿐입니다. 각 한도 뒤 계정은 단방향 hash이며 로그인 자체는 아닙니다.",
    "privacy.never": "동기화하지 않음",
    "privacy.never.1": "원본 프롬프트 또는 소스 파일",
    "privacy.never.2": "대화 transcript",
    "privacy.never.3": "OAuth 자격 증명 또는 provider 응답",

    "final.title": "패키징된 앱을 받고 모든 코딩 도구 사용량을 계속 보세요.",
    "final.readme": "설정 가이드 읽기",
    "final.downloads": "릴리스 다운로드 옵션",
    "final.mac.title": "macOS .dmg",
    "final.mac.body": "Apple Silicon, M1 이후",
    "final.win.title": "Windows Setup .exe",
    "final.win.body": "설치판 권장",
    "final.source": "Intel Mac, Linux, 소스 실행은 README의 고급 설정을 참고하세요.",

    "footer.api": "API 문서",
    "footer.worker": "Worker 문서",
    "footer.license": "라이선스"
  }
};

function normalizeLanguage(value) {
  if (!value) return "";
  var normalized = value.replace("_", "-");
  if (supportedLanguages.indexOf(normalized) !== -1) return normalized;
  var lower = normalized.toLowerCase();
  if (lower === "zh" || lower.indexOf("zh-hant") === 0 || lower === "zh-tw" || lower === "zh-hk" || lower === "zh-mo") return "zh-TW";
  if (lower.indexOf("zh-hans") === 0 || lower === "zh-cn" || lower === "zh-sg") return "zh-CN";
  if (lower.indexOf("ko") === 0 || lower === "kr") return "ko";
  if (lower.indexOf("en") === 0) return "en";
  return "";
}
function languageShortLabel(language) {
  if (language === "zh-TW") return "繁";
  if (language === "zh-CN") return "简";
  if (language === "ko") return "KO";
  return "EN";
}
function readStoredLanguage() { try { return normalizeLanguage(window.localStorage.getItem(languageStorageKey)); } catch (e) { return ""; } }
function storeLanguage(language) { try { window.localStorage.setItem(languageStorageKey, language); } catch (e) {} }
function languageFromHash() { return normalizeLanguage(window.location.hash.slice(1)); }
function preferredLanguage() { return languageFromHash() || readStoredLanguage() || normalizeLanguage(window.navigator.language) || "en"; }

function translateElement(element, messages) {
  var key = element.getAttribute("data-i18n");
  if (key && messages[key]) element.textContent = messages[key];
  var attrConfig = element.getAttribute("data-i18n-attr");
  if (!attrConfig) return;
  var pairs = attrConfig.split(",");
  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split(":");
    var attr = (parts[0] || "").trim(), attrKey = (parts[1] || "").trim();
    if (attr && attrKey && messages[attrKey]) element.setAttribute(attr, messages[attrKey]);
  }
}
function applyLanguage(language) {
  var active = supportedLanguages.indexOf(language) !== -1 ? language : "en";
  var messages = translations[active];
  document.documentElement.lang = active;
  document.title = messages["meta.title"];
  var nodes = document.querySelectorAll("[data-i18n], [data-i18n-attr]");
  for (var i = 0; i < nodes.length; i++) translateElement(nodes[i], messages);
  var langBtns = document.querySelectorAll("[data-lang]");
  for (var j = 0; j < langBtns.length; j++) langBtns[j].setAttribute("aria-checked", String(langBtns[j].getAttribute("data-lang") === active));
  var cur = document.querySelector("[data-lang-current]");
  if (cur) cur.textContent = languageShortLabel(active);
  storeLanguage(active);
  if (window.location.hash !== "#" + active) window.history.replaceState(null, "", "#" + active);
}
function setupLanguageButtons() {
  var btns = document.querySelectorAll("[data-lang]");
  for (var i = 0; i < btns.length; i++) {
    (function (b) { b.addEventListener("click", function () { applyLanguage(b.getAttribute("data-lang")); }); })(btns[i]);
  }
  window.addEventListener("hashchange", function () { applyLanguage(preferredLanguage()); });
}
