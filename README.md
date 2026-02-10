# Trivia Quiz

A simple yet engaging trivia quiz application built with React. This project was created as an educational exercise to demonstrate modern React patterns, state management, and GDPR-compliant data handling.

## What is this?

This is a browser-based quiz game where you answer trivia questions and track your scores over time. The application runs entirely in your browser with no server-side processing. All your data stays on your device using LocalStorage, and you have full control over what gets saved through a GDPR-compliant cookie consent system.

## Getting started

To run this project locally, you'll need Node.js installed on your machine. Clone the repository and install the dependencies:

```bash
npm install
```

Once everything is installed, start the development server:

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000). You can now play the quiz, adjust settings, and see how everything works.

## How it works

When you first open the application, you'll see a cookie consent banner. This isn't just for show - it actually controls whether your quiz settings and results get saved to LocalStorage. If you accept, your preferences and scores persist between sessions. If you decline, you can still use the app, but nothing gets saved.

The quiz itself is straightforward. Enter your name, choose your difficulty level and number of questions, then start playing. Each question is timed, and you'll see your results at the end. All your past scores are saved (if you accepted cookies) and can be viewed in the results table.

### Managing Your Privacy

You have full control over your data at any time. Click **Cookie Settings** in the header to:
- View your current consent status
- Change your cookie preferences
- Clear all stored data with one click
- Learn exactly what information is stored locally

All data stays on your device - nothing is ever sent to external servers.


## Documentation

This project includes comprehensive documentation in two formats. You can explore the component library interactively using Storybook:

```bash
npm run storybook
```

This opens Storybook at [http://localhost:6006](http://localhost:6006) where you can see all the UI components with their different states and properties. The [Button](https://lahoda-dmytro.github.io/trivia_quiz/docs/storybook/index.html?path=/docs/forms-settingsform--docs) and SettingsForm components are fully documented with interactive controls.

For API documentation, generate the JSDoc files:

```bash
npm run docs
```

Then open `docs/index.html` in your browser to browse the [API documentation](https://lahoda-dmytro.github.io/trivia_quiz/docs/api/index.html). This covers all the hooks, stores, and utility functions used throughout the application.

You can also visit the [documentation hub](https://lahoda-dmytro.github.io/trivia_quiz/docs/) which provides links to both Storybook and JSDoc in one place.

## Legal and privacy

This project is released under the [MIT License](./LICENSE), which means you're free to use, modify, and distribute it as you see fit. A full report of all third-party dependencies and their licenses is available in [LICENSE_REPORT.txt](./LICENSE_REPORT.txt).

Privacy is taken seriously here. The [Privacy Policy](./PRIVACY.md) explains exactly what data is collected (spoiler: not much) and how it's handled. The cookie consent system ensures compliance with GDPR regulations, giving users explicit control over data persistence.

## Technical details

The application is built with React 19 and uses Zustand for state management. Form handling is done through React Hook Form, and routing uses React Router DOM. The entire codebase follows modern React patterns including custom hooks, container/presentational component separation, and proper state management practices.

If you're interested in the architectural decisions and best practices used in this project, check out the [BEST_PRACTICES.md](src/BEST_PRACTICES.md) file in the source directory.

## Live demo

You can try the application live at [https://lahoda-dmytro.github.io/trivia_quiz/](https://lahoda-dmytro.github.io/trivia_quiz/). The documentation is also available online, so you don't need to build it locally if you just want to explore how things work.


## Author

Created by Lahoda Dmytro in 2026 as a demonstration of modern React development practices and GDPR-compliant web applications.
