# Contributing to Token Mate

Thanks for your interest in Token Mate. This is a public repository maintained by [@atukunare](https://github.com/atukunare).

## Before you start

- Read [README.md](README.md) for setup, architecture, and privacy boundaries.
- Check [open issues](https://github.com/atukunare/token-mate/issues) and [releases](https://github.com/atukunare/token-mate/releases) to avoid duplicate work.
- For security issues, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.

## Development setup

```bash
git clone https://github.com/atukunare/token-mate.git
cd token-mate
npm install
env -u ELECTRON_RUN_AS_NODE npm start
```

On macOS, if `ELECTRON_RUN_AS_NODE=1` is set in your shell, unset it before starting Electron.

Run checks before opening a PR:

```bash
npm run verify
```

## Pull requests

1. Fork the repo and create a focused branch from `main`.
2. Keep changes scoped to the problem you are solving.
3. Update user-facing docs when behavior or setup changes (`README.md`, locale READMEs, `docs/`, or `worker/README.md`).
4. Add or update tests when you change shared logic.
5. Open a PR with a clear summary and a short test plan.

## Commit messages

Use short imperative subjects, for example:

- `fix: keep DeepSeek key preview after save`
- `docs: add Korean README`
- `feat: improve tray limit bar fallback`

## Documentation map

| Document | Purpose |
|----------|---------|
| [README.md](README.md) | Main product and setup guide (English) |
| [README.ko.md](README.ko.md) | Korean guide |
| [README.zh-CN.md](README.zh-CN.md) | Simplified Chinese guide |
| [README.zh-TW.md](README.zh-TW.md) | Traditional Chinese guide |
| [CHANGELOG.md](CHANGELOG.md) | High-level release notes pointer |
| [docs/API.md](docs/API.md) | Hub HTTP API |
| [worker/README.md](worker/README.md) | Cloudflare Worker deployment |
| [CONTRIBUTORS.md](CONTRIBUTORS.md) | Maintainer and integrated platforms |

## What we will not merge

- Changes that exfiltrate prompts, source code, credentials, or raw provider responses
- Hard-coded personal paths, secrets, or private infrastructure details
- Large unrelated refactors bundled with a small fix

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
