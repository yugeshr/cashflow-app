# Cashflow — Expense Tracker

A modern, premium expense tracking app with **React + Tailwind**, Telegram bot integration, and live preview.

**Repository:** [github.com/yugeshr/cashflow-app](https://github.com/yugeshr/cashflow-app)

## Features

✅ **React Dashboard** — Beautiful UI with Tailwind CSS  
✅ **Live Preview** — Docker container with hot reload  
✅ **Git Auto-Sync** — Automatic pulls every 5 minutes  
🚀 **Telegram Bot** — Quick expense logging (coming next)  
🚀 **Backend API** — Node.js/Express (coming next)  
🚀 **Database** — Supabase (configure later)

## Stack

- **Frontend:** React 18 + Tailwind CSS + Vite
- **Backend:** Node.js / Express (planned)
- **Database:** Supabase (planned)
- **Bot:** Telegram Bot API (planned)
- **Hosting:** Hostinger VPS (Docker Compose)
- **Preview:** Hot reload dev server on port 3000

## Quick Start

### Prerequisites
- Docker & Docker Compose
- GitHub token (for git-sync)

### Deploy

```bash
# From workspace directory
docker-compose up -d

# View logs
docker-compose logs -f cashflow-preview
```

### Access
```
http://localhost:3000
(Direct access from VPS, or SSH tunnel from your machine)
```

### Develop

Edit files in `cashflow-app/frontend/src/`:
```
src/App.jsx         ← Main dashboard component
src/components/     ← Reusable UI components
src/index.css       ← Tailwind + custom styles
```

Changes auto-reload via Vite HMR (Hot Module Reload).

## Project Structure

```
cashflow-app/
├── design-prototype.html    ← Original HTML mockup
├── frontend/                ← React app (NEW)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── StatCard.jsx
│   │   │   ├── TransactionList.jsx
│   │   │   └── CategoryBreakdown.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
├── backend/         ← Node.js API (coming next)
├── database/        ← Schema & migrations (coming next)
└── telegram-bot/    ← Bot commands (coming next)
```

## Docker Compose

Two services:

**preview** — React dev server
- Hot reload on file changes
- Port 3000 → 5173 (Vite)
- Auto-installs dependencies

**git-sync** — Auto-pull from GitHub
- Pulls every 5 minutes
- Uses GitHub token from `.git-credentials`
- Triggers Vite rebuild on file changes

See `docker-compose.yml` for details.

## Development Commands

```bash
# Start containers
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker logs cashflow-preview -f
docker logs git-sync -f

# Restart a service
docker restart cashflow-preview

# Access container shell
docker exec -it cashflow-preview sh
```

## Status

- ✅ **Design Complete** — HTML mockup + Figma specs
- ✅ **React Frontend** — Dashboard with Tailwind CSS
- ✅ **Docker Preview** — Hot reload dev environment
- 🚀 **Next:** Backend API (Node.js/Express)
- 🚀 **Then:** Telegram bot + Database integration

## Environment Variables

**docker-compose.yml:**
```yaml
VITE_API_URL=http://localhost:8000  # Backend API (when ready)
NODE_ENV=development
```

## Learn More

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Docker Docs](https://docs.docker.com)

---

**Built by:** Sage 🐬 for Yugesh Ralli  
**Started:** Feb 15, 2026
