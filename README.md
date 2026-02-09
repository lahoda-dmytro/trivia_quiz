# Trivia Quiz Application

An educational React-based trivia quiz application with customizable difficulty levels and question counts.

## Features

- Multiple difficulty levels: Easy, Medium, Hard
- Customizable number of questions: 5, 10, or 15
- Score tracking and results history
- LocalStorage persistence for settings and results
- GDPR-compliant cookie consent banner
- Responsive design
- No server-side data collection

## Tech Stack

- React 19.2.0
- React Router DOM 7.9.5
- Zustand 5.0.8 for state management
- React Hook Form 7.66.0
- React Cookie Consent for GDPR compliance
- LocalStorage for data persistence

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at http://localhost:3000.

### Build

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

### Testing

```bash
npm test
```

Runs the test suite in interactive watch mode.

### Deployment

```bash
npm run deploy
```

Deploys the application to GitHub Pages.

### Storybook

```bash
npm run storybook
```

Runs Storybook for component development and documentation at http://localhost:6006.

```bash
npm run build-storybook
```

Builds Storybook for production deployment.

## Project Structure

```
src/
├── components/     - Reusable UI components
├── pages/          - Page-level components
├── hooks/          - Custom React hooks
├── store/          - Zustand state management stores
├── data/           - Quiz questions data
├── context/        - React context providers
└── assets/         - Static assets

## Storybook

Component library documentation is available via Storybook:

**Documented Components:**
- `Button` - Basic UI button component with configurable properties
- `SettingsForm` - Complex form component for quiz settings

Each component includes:
- Interactive controls for all properties
- Multiple story variations (2-4 per component)
- Auto-generated documentation
- Accessibility testing

Run `npm run storybook` to explore components.
```

## Key Components

### State Management

- `useSettingsStore` - Manages quiz settings (difficulty, number of questions)
- `useResultsStore` - Stores quiz results and score history

### Custom Hooks

- `useQuiz` - Main quiz logic including question shuffling, scoring, and state management

## Data Storage

All data is stored locally using:
- LocalStorage for user preferences
- Zustand persist middleware for state persistence

No data is transmitted to external servers.

## License

MIT License - See LICENSE file for details.

## Privacy

See PRIVACY.md for information about data handling and GDPR compliance.

## Contributing

This is an educational project. Contributions should maintain code quality and follow React best practices.

## Documentation

For detailed code documentation, see the docs/ folder or refer to inline JSDoc comments in the source code.
