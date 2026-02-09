# React Best Practices

## 1. Separation of Concerns with Custom Hooks
I implemented separation of logic and presentation. All game mechanics are extracted into a custom hook `useQuiz`. This hook acts as a controller that manages game state, timers, and scoring, providing the `GamePage` component with only a ready-made interface for display. This allows components to remain clean and focused solely on rendering.

* **Game Logic (Hook):**
  [useQuiz.js](hooks/useQuiz.js)
* **UI Usage:**
  [GamePage.jsx](pages/GamePage/GamePage.jsx)

## 2. State Optimization with Derived State
I avoided redundant use of `useState` for data that can be calculated mathematically based on existing props or other state. Instead of creating extra variables that need to be synchronized, I use computed values "on the fly". This ensures data is always up-to-date and prevents desynchronization errors.

* **Calculation example in hook:**
  [useQuiz.js](hooks/useQuiz.js)

## 3. Using React Portals for UI Isolation
For displaying modal windows, I used the Portal pattern. This allows rendering the modal window outside the parent component hierarchy (in a separate DOM node), which solves typical problems with `z-index` and `overflow: hidden` in parent containers.

* **Portal component implementation:**
  [Modal.jsx](components/UI/Modal/Modal.jsx)
* **Usage in app:**
  [App.jsx](App.jsx)

## 4. Modular Global State Management with Zustand
I abandoned bulky Redux in favor of lightweight Zustand. I split the store into logical modules: `useSettingsStore` for game configuration and `useResultsStore` for results history. I also used the `persist` middleware for automatic data saving to LocalStorage, which improves UX when reloading the page.

* **Settings store:**
  [useSettingsStore.js](store/useSettingsStore.js)
* **Results store:**
  [useResultsStore.js](store/useResultsStore.js)

## 5. Using Protected Routes
To prevent users from accessing the game process without first entering their name and settings, I implemented a protected routes mechanism. If the game status is not active, the user is automatically redirected to the home page using the `Navigate` component.

* **Route protection implementation:**
  [App.jsx](App.jsx)
