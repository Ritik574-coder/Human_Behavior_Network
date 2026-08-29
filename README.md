# 🌐 Human Behavior Pattern (Reality Graph)

> **Built by Ritik using Vibe Coding ⚡**

An interactive visual graph engine designed to map, visualize, and analyze complex systemic drivers behind human behavior and societal structures.

---

## ✨ Overview

**Human Behavior Pattern / Reality Graph** breaks down complex socio-economic systems into interconnected nodes across key structural lenses:

- 💵 **Money**: Financial flows, economic incentives, capital accumulation, and transaction loops.
- 📊 **Data**: Information architecture, surveillance, algorithmic feedback loops, and digital traces.
- 🎯 **Incentives**: Behavioral alignment, reward mechanisms, social proof, and motivation structures.
- ⚡ **Power**: Governance, institutional control, regulatory levers, and systemic influence.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) + [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/overview) & TanStack Router
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [Radix UI Primitives](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visualization Engine**: Custom HTML5 Canvas physics engine (`src/components/graph/GraphCanvas.tsx`)
- **Build & Server Tooling**: Vite 8 + Nitro

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js **v22+**
- npm

### Installation & Running

1. Clone or navigate to the project directory:
   ```bash
   cd HumanBehaviorPattern
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   sh startup.sh
   # or
   npm run dev
   ```

4. Open your browser:
   👉 **[http://localhost:8080](http://localhost:8080)**

---

## 🌐 Deploying Live via GitHub Actions

This project includes an automated GitHub Actions deployment workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Quick Deploy Steps:
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/HumanBehaviorPattern.git
   git push -u origin main
   ```
2. Enable GitHub Actions for deployment:
   - Go to **Settings > Pages** on GitHub and set **Source** to **GitHub Actions**.
   - Go to **Settings > Actions > General > Workflow permissions** and select **Read and write permissions**.

Your live website will be accessible at:
`https://<your-username>.github.io/HumanBehaviorPattern/`

For detailed step-by-step instructions, see [`VIBE_CODING_AND_DEPLOYMENT_GUIDE.md`](VIBE_CODING_AND_DEPLOYMENT_GUIDE.md).

---

## 🧪 Verification & Testing

Run automated checks locally:

```bash
# Typecheck TypeScript files
npm run typecheck

# Run production build
npm run build

# Run Playwright browser smoke tests (desktop & mobile)
node scripts/browser-smoke.mjs

# Verify brand & social sharing card compliance
node scripts/brand-check.mjs --game
```

---

## 👤 Builder

Designed and developed by **Ritik** using **Vibe Coding** — leveraging AI pair-programming and prompt-driven rapid iteration.
