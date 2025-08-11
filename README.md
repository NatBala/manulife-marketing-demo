# Manulife Marketing Demo

A React-based marketing insights platform for Manulife advisors with Adobe CDP integration.

## Features

- **Market Research Dashboard**: Comprehensive market analysis with real-time data
- **Adobe CDP Integration**: Connect to Adobe Customer Data Platform for enhanced insights  
- **Advisor Selection**: Compare and select advisors based on performance metrics
- **Marketing Content Generation**: AI-powered content creation for advisor outreach
- **Interactive Analytics**: Deep-dive into market trends and advisor performance

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NatBala/manulife-marketing-demo.git
cd manulife-marketing-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── AdvisorProfile.tsx
│   ├── DateRangeLanding.tsx
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utilities
└── types/              # TypeScript definitions
```

## Features Overview

### Market Research
- Multi-step research simulation with realistic progress tracking
- Adobe CDP data integration for comprehensive market analysis
- Interactive timeline showing research progress

### Advisor Management
- Compare up to 2 advisors simultaneously
- Performance metrics and analytics
- Marketing content generation tailored to each advisor

### Content Generation
- Streaming content simulation
- Personalized marketing materials
- Export functionality (Download, Email, Calendar integration)

## License

This project is proprietary and confidential.

## Contact

For questions or support, please contact the development team.