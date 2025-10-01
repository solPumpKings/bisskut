# AsterDrop - Automated Airdrop Claiming

## Project Overview
This is an automated airdrop claiming application for AsterDex, built with Vite, React, TypeScript, and shadcn-ui. The application allows users to automate their AsterDex airdrop claims with secure, fast, and effortless token collection.

## Technology Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Routing**: React Router DOM v6
- **UI Components**: shadcn-ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom animations
- **State Management**: TanStack Query (React Query v5)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Project Structure
```
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # React components
│   │   └── ui/        # shadcn-ui components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Route pages
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── package.json       # Dependencies
├── vite.config.ts     # Vite configuration
└── tailwind.config.ts # Tailwind configuration
```

## Development Setup

### Environment Configuration
- **Dev Server**: Runs on `0.0.0.0:5000`
- **HMR**: Configured for Replit proxy with WSS protocol
- **Build Output**: `dist/` directory

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Replit Configuration

### Workflow
- **Name**: Start application
- **Command**: `npm run dev`
- **Port**: 5000 (webview)
- **Output Type**: webview

### Deployment
- **Target**: autoscale (stateless frontend)
- **Build**: `npm run build`
- **Run**: `npx vite preview --host 0.0.0.0 --port 5000`

### Key Replit Adaptations
1. **Vite Server Configuration**: 
   - Host set to `0.0.0.0` to allow external connections
   - Port set to `5000` (required for Replit frontend)
   - HMR configured with WSS protocol and Replit domain for proper hot reloading

2. **Proxy Support**: 
   - HMR uses `wss://` protocol with clientPort 443
   - Configured to work with Replit's iframe proxy

## Recent Changes
- **2025-10-01**: Initial GitHub import setup for Replit environment
  - Installed dependencies via npm
  - Configured Vite for Replit (port 5000, host 0.0.0.0)
  - Set up HMR for Replit proxy with WSS protocol
  - Created workflow for development server
  - Configured deployment for autoscale target

## Application Features
- Automated airdrop claiming interface
- Wallet connection functionality
- Responsive design with dark theme
- Hero section with call-to-action
- Features showcase
- Claims dashboard
- Footer with navigation

## Notes
- This is a frontend-only application (no backend required)
- Uses React Router for client-side routing
- Implements TanStack Query for data fetching
- Built with modern React patterns (hooks, function components)
