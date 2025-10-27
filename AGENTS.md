# Repository Guidelines

## Project Structure & Module Organization
- Entry point: `app.js` (boots `@link-loom/sdk`).
- Source: `src/` with cohesive modules:
  - Routes: `src/routes/**` (e.g., `src/routes/api/identity/user/user.route.js`).
  - Services: `src/services/**` (e.g., `src/services/user/user-management/user-management.service.js`).
  - Models: `src/models/**` (e.g., `*.model.js`).
  - Adapters: `src/adapters/**` (db, storage, observability; e.g., `*.adapter.js`).
  - Functions: `src/functions/**` (cache/startup/timed) and `src/events/**` (producer/consumer).
  - Assets: `src/static/**` and seeds: `src/seeder/**`.
- Configuration: copy `config/template.json` to `config/default.json` and adjust. Optional `.env` from `.env.sample`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm start` — run the service locally (reads `config/default.json`).
- `npm run seed` — run data seeders from `src/seeder/**`.
- `npm run lint` — check code style via ESLint + Prettier.
- `npm run format` — format codebase with Prettier.

## Coding Style & Naming Conventions
- Runtime: Node 18, CommonJS (`require/module.exports`).
- Formatting: Prettier (2 spaces, single quotes, semicolons). Enforced by ESLint (`plugin:prettier/recommended`).
- Filenames: use kebab-case with suffixes: `*.route.js`, `*.service.js`, `*.model.js`, `*.adapter.js`, `*.event.js`.
- Structure new features under `src/<area>/<feature>/` and expose via `index.js` when grouping.

## Testing Guidelines
- No automated test harness is configured. Prefer adding Jest with files named `*.test.js` under `src/`.
- Manual checks: OpenAPI playground at `/open-api.playground` and `src/tests/event-system.html` for event flow.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`.
- PRs must include: concise description, linked issues (e.g., `Fixes #123`), local run/lint evidence, and screenshots or curl logs for new routes.
- Keep changes focused; update docs/config samples when relevant.

## Security & Configuration Tips
- Do not commit secrets. Use `.env` and `config/default.json`. Example vars: `VERIPASS_*`, `SUPPRESS_NO_CONFIG_WARNING=true`.
- Server settings live in `config/default.json` (e.g., `server.port`, `server.name`, `server.version`). Validate startup logs for URLs printed at boot.

