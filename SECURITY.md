# Security Policy

## Supported versions

Security fixes are provided for the latest release on the [`main`](https://github.com/atukunare/token-mate/tree/main) branch and the most recent tagged release.

| Version | Supported |
|---------|-----------|
| latest `main` | yes |
| latest tagged release | yes |
| older releases | best effort |

## Reporting a vulnerability

Please **do not** open a public GitHub issue for security problems.

Instead, report privately through one of these channels:

1. [GitHub Security Advisories](https://github.com/atukunare/token-mate/security/advisories/new) (preferred)
2. Open a minimal private contact route via a maintainer issue request if Advisories are unavailable

Include:

- A clear description of the issue
- Steps to reproduce
- Impact assessment (local-only vs sync/hub exposure)
- Affected version or commit

We aim to acknowledge reports within a few business days.

## Scope notes

Token Mate is designed to stay local-first. The highest-risk areas are:

- Hub authentication and ingest endpoints (`TOKEN_MONITOR_SECRET`, Worker routes)
- Settings files that store API keys or session cookies on disk
- External URL allowlists in the Electron shell

Reports about expected local storage of user-provided API keys in the app settings directory are generally out of scope unless there is an unexpected exposure path (for example, syncing secrets to the hub or rendering them to untrusted pages).

## Safe defaults

- Use a strong random `TOKEN_MONITOR_SECRET` for any hub exposed beyond localhost.
- Do not commit `.env`, `settings.json`, cookies, or API keys.
- Treat unsigned desktop builds like any other unsigned local application.
