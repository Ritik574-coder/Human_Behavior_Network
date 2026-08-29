# 🚀 Vibe Coding & Deployment Guide for Ritik

Welcome Ritik! This guide explains how your project **Human Behavior Pattern / Reality Graph** is built, how to run it locally, how all recent improvements were applied, and how to publish it live for everyone using **GitHub Actions**.

---

## 🛠️ 1. Project Overview

Your project is an interactive, visual graph application built for exploring complex systemic drivers (**Money**, **Data**, **Incentives**, and **Power**).

### Tech Stack
- **Framework**: React 19 + [TanStack Start](https://tanstack.com/router) & TanStack Router
- **Styling**: Tailwind CSS v4 + Radix UI primitives & Lucide React icons
- **State Management**: Zustand
- **Visualization Engine**: Custom HTML5 Canvas graph renderer (`src/components/graph/GraphCanvas.tsx`)
- **Dev & Build Tooling**: Vite 8, Nitro, TypeScript, Playwright QA

---

## 💻 2. Running the Live Website Locally

The local server contract binds to **`0.0.0.0:8080`**.

### Start Command
Run the quick-start script (idempotent, backgrounded):
```bash
sh startup.sh
```
Or start the dev server directly:
```bash
npm run dev
```

### Accessing the Web App
Open your browser at:
👉 **[http://localhost:8080](http://localhost:8080)**

---

## 🌐 3. Publishing Live for Everyone (GitHub Actions)

We added a complete GitHub Actions workflow at [`.github/workflows/deploy.yml`](file:///home/ritik/Documents/HumanBehaviorPattern/.github/workflows/deploy.yml). Every time you push code to the `main` branch on GitHub, your site will build and publish automatically to **GitHub Pages**.

### Step 1: Initialize Git & Push to GitHub

If you haven't connected this directory to GitHub yet, run these commands in your terminal:

```bash
# 1. Initialize git repository
git init

# 2. Add files and make initial commit
git add .
git commit -m "feat: setup human behavior pattern app and github actions deployment workflow"

# 3. Rename default branch to main
git branch -M main

# 4. Add your GitHub repository URL (replace <your-github-username>)
git remote add origin https://github.com/<your-github-username>/HumanBehaviorPattern.git

# 5. Push code to GitHub
git push -u origin main
```

---

### Step 2: Configure GitHub Repository Credentials & Permissions

To allow GitHub Actions to publish your live website automatically, configure these two settings in your repository on GitHub:

1. **Enable GitHub Pages Source**:
   - Go to your repository on GitHub: `https://github.com/<your-github-username>/HumanBehaviorPattern`
   - Click **Settings** ⚙️ → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, change the dropdown from *Deploy from a branch* to **GitHub Actions**.

2. **Grant Workflow Write Permissions**:
   - In repository **Settings** ⚙️ → **Actions** → **General**.
   - Scroll down to **Workflow permissions**.
   - Select **Read and write permissions**.
   - Click **Save**.

---

### Step 3: View Your Live Website

Once pushed, go to the **Actions** tab on your GitHub repository. You will see the workflow running:
`Deploy Human Behavior Pattern / Reality Graph to GitHub Pages`

When complete (takes ~1 minute), GitHub will display your live public URL:
👉 **`https://<your-github-username>.github.io/HumanBehaviorPattern/`**

---

## 🔐 4. Managing Credentials & Secrets

### Automatic Credentials (`GITHUB_TOKEN`)
The GitHub Actions workflow uses the built-in `GITHUB_TOKEN` credential automatically provided by GitHub. You do **not** need to generate or paste personal access tokens manually for basic deployments.

### Adding Custom API Credentials (e.g. xAI / LLM / DB Keys)
If you add features requiring API keys in the future:
1. Go to repository **Settings** ⚙️ → **Secrets and variables** → **Actions**.
2. Click **New repository secret**.
3. Add key/value pairs (e.g. Name: `XAI_API_KEY`, Value: `your-secret-key`).
4. In `.github/workflows/deploy.yml`, pass secrets under environment steps:
   ```yaml
   env:
     XAI_API_KEY: ${{ secrets.XAI_API_KEY }}
   ```

---

## ⚡ 5. Recent Improvements & Quality Audits

All existing code and configuration were thoroughly checked and updated:

1. **Fixed `startup.sh` Path Resolution**:
   - Updated `startup.sh` to use `cd "$(dirname "$0")"` so it launches cleanly regardless of working directory.

2. **Dependency Installation & Path Wrappers**:
   - Installed all 430+ npm packages cleanly (`node_modules`).
   - Updated `scripts/with-app-env.mjs` to auto-append `node_modules/.bin` to `PATH`, preventing Vite spawn issues.

3. **Browser QA & Playwright Setup**:
   - Installed Playwright Chromium test runner.
   - Updated `scripts/browser-guard.mjs`, `scripts/browser-smoke.mjs`, and `scripts/browser-smoke-verdict.mjs` to dynamically resolution paths for screenshot output.
   - **Smoke Test Result**: Passed 100% on both Desktop (1280x800) and Mobile (390x844) viewports with zero console or page errors.

4. **Brand Asset Compliance**:
   - Updated [`src/lib/og/site.json`](file:///home/ritik/Documents/HumanBehaviorPattern/src/lib/og/site.json) to specify `"type": "x:game"`.
   - Created [`public/x-banner.jpg`](file:///home/ritik/Documents/HumanBehaviorPattern/public/x-banner.jpg) for 50:11 social previews.
   - Ran `node scripts/brand-check.mjs --game` → 0 warnings.

5. **Typecheck & Production Build Verification**:
   - `npm run typecheck` → 0 TypeScript errors.
   - `npm run build` → Succeeded cleanly.

---

## 🔍 6. Deep Architectural Analysis & Enhanced Features

Following a deep audit of the system physics engine (`engine.ts`), Zustand store (`graph-store.ts`), and trace algorithms (`traces.ts`), key enhancements were built into the application:

1. **📷 One-Click Canvas Snapshot Export (PNG)**:
   - Added a high-resolution canvas snapshot exporter directly in the canvas control bar ([`src/components/chrome/GraphControls.tsx`](file:///home/ritik/Documents/HumanBehaviorPattern/src/components/chrome/GraphControls.tsx)).
   - Allows Ritik and users to save PNG images of any graph view, filter state, or active scenario.

2. **📊 System State Data Export (JSON)**:
   - Added a JSON export button in [`GraphControls.tsx`](file:///home/ritik/Documents/HumanBehaviorPattern/src/components/chrome/GraphControls.tsx) to download full system state metadata, mode settings, active scenarios, node counts, and edge counts.

3. **🚨 Interactive Node Removal Shock Indicator**:
   - Enhanced [`TopBar.tsx`](file:///home/ritik/Documents/HumanBehaviorPattern/src/components/chrome/TopBar.tsx) with a real-time banner when node removal stress tests are active.
   - Displays the target node currently removed and provides a one-click **Restore** button.

4. **🔗 Causality & Path-Finding Indicator**:
   - Enhanced [`Inspector.tsx`](file:///home/ritik/Documents/HumanBehaviorPattern/src/components/chrome/Inspector.tsx) to display active path tracing targets (`pathTargetId`) when examining relationships between nodes.

---

## 🎨 7. Vibe Coding Tips for Ritik

As you continue building this app with Vibe Coding (prompting AI agents to build and refine features):

1. **Iterate Freely**: Ask for new nodes, visual layers, or scenario simulations in natural language.
2. **Verify Quick**: Run `npm run typecheck` or `node scripts/browser-smoke.mjs` after adding complex components.
3. **Instant Live Updates**: Every `git push` automatically updates your live site on GitHub Pages.
