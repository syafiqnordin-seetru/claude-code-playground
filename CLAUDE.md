# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Setup

After cloning, install Claude Code skills to enable AI assistance:

```bash
npx skills add angular/angular@angular-developer -y
npx skills add angular/skills@angular-new-app -y
```

## Commands

```bash
npm start          # Dev server at http://localhost:4200 (auto-reloads)
npm run build      # Production build to dist/
npm run watch      # Watch build in development mode
npm test           # Run unit tests with Vitest
```

Generate new components/services/etc:
```bash
ng generate component <name>
ng generate service <name>
```

## Architecture

Angular 21 SPA using the **standalone component** pattern — no NgModules. Bootstrap entry in `src/main.ts` calls `bootstrapApplication(App, appConfig)`.

Key files:
- `src/app/app.ts` — Root component
- `src/app/app.config.ts` — Global providers (`provideRouter`, `provideBrowserGlobalErrorListeners`)
- `src/app/app.routes.ts` — Route definitions
- `src/styles.scss` — Global styles

**File naming convention**: Component files omit the `.component` infix — `app.ts`, `app.html`, `app.scss`, `app.spec.ts` (not `app.component.ts`).

## UI Libraries

- **DevExtreme** (`devextreme-angular`): Use `dx-*` component selectors (e.g., `<dx-button>`). Import `DxButtonModule` etc. from `devextreme-angular` in the component's `imports` array.
- **Bootstrap 5**: Available via CDN-free CSS. Use utility classes directly in templates.

Both are included globally via `angular.json` styles:
```
node_modules/devextreme/dist/css/dx.light.css
node_modules/bootstrap/dist/css/bootstrap.min.css
src/styles.scss
```

## TypeScript

Strict mode is fully enabled (`strict`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, `strictTemplates`, etc.). All new code must satisfy these checks without using `any` or `!` non-null assertions.

Use Angular **signals** (`signal()`, `computed()`, `effect()`) for reactive state rather than RxJS where appropriate.
