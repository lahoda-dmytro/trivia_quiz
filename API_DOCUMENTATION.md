# API Documentation

## Overview

This document provides detailed information about the core APIs and functions in the Trivia Quiz application.

## Hooks

### useQuiz

Custom hook that manages quiz state and logic.

**Returns:**
- `status` (string) - Current quiz status: 'ready', 'active', or 'finished'
- `currentQuestion` (object) - Current question object
- `totalQuestions` (number) - Total number of questions in current quiz
- `score` (number) - Current score
- `currentIndex` (number) - Index of current question
- `startQuiz` (function) - Starts a new quiz session
- `answerQuestion` (function) - Handles answer selection
- `restartQuiz` (function) - Resets quiz to ready state

**Usage:**

```javascript
import { useQuiz } from './hooks/useQuiz';

function QuizComponent() {
  const { status, currentQuestion, startQuiz, answerQuestion } = useQuiz();
  
  if (status === 'ready') {
    return <button onClick={startQuiz}>Start Quiz</button>;
  }
  
  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option, index) => (
        <button key={index} onClick={() => answerQuestion(index)}>
          {option}
        </button>
      ))}
    </div>
  );
}
```

**Internal Functions:**

#### shuffleArray(array)

Shuffles an array using Fisher-Yates algorithm.

Parameters:
- `array` (Array) - Array to shuffle

Returns:
- Shuffled array

#### startQuiz()

Filters questions by difficulty and starts a new quiz session.

Behavior:
- Filters questions based on selected difficulty
- Shuffles questions randomly
- Limits questions to selected count
- Resets all quiz state

#### answerQuestion(selectedIndex)

Records user answer and advances to next question.

Parameters:
- `selectedIndex` (number) - Index of selected answer option

Behavior:
- Records answer in state
- If last question: calculates final score and saves result
- If not last: advances to next question

#### restartQuiz()

Resets quiz to initial ready state.

## State Management

### useSettingsStore

Zustand store for quiz settings with LocalStorage persistence.

**State:**
- `numQuestions` (string) - Number of questions: '5', '10', or '15'
- `difficulty` (string) - Difficulty level: 'easy', 'medium', or 'hard'

**Actions:**
- `setSettings(newSettings)` - Updates settings

**Usage:**

```javascript
import { useSettingsStore } from './store/useSettingsStore';

function SettingsComponent() {
  const { numQuestions, difficulty, setSettings } = useSettingsStore();
  
  return (
    <div>
      <select 
        value={numQuestions}
        onChange={(e) => setSettings({ numQuestions: e.target.value })}
      >
        <option value="5">5 Questions</option>
        <option value="10">10 Questions</option>
        <option value="15">15 Questions</option>
      </select>
      
      <select 
        value={difficulty}
        onChange={(e) => setSettings({ difficulty: e.target.value })}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}
```

### useResultsStore

Zustand store for quiz results history with LocalStorage persistence.

**State:**
- `results` (object) - Results organized by username

**Actions:**
- `addResult(username, resultData)` - Adds a new quiz result

**Result Data Structure:**

```javascript
{
  score: number,
  total: number,
  difficulty: string,
  date: string (ISO 8601 format)
}
```

**Usage:**

```javascript
import { useResultsStore } from './store/useResultsStore';

function ResultsComponent() {
  const results = useResultsStore((state) => state.results);
  const username = localStorage.getItem('quizUsername') || 'noname';
  const userResults = results[username] || [];
  
  return (
    <div>
      {userResults.map((result, index) => (
        <div key={index}>
          Score: {result.score}/{result.total} - {result.difficulty}
        </div>
      ))}
    </div>
  );
}
```

## Data Structure

### Question Object

```javascript
{
  question: string,
  options: string[],
  correctAnswer: number,
  difficulty: 'easy' | 'medium' | 'hard'
}
```

## LocalStorage Keys

- `quiz-settings` - Persisted settings from useSettingsStore
- `quiz-results` - Persisted results from useResultsStore
- `quizUsername` - Current user's username

## Best Practices

1. Always use the provided hooks for state management
2. Do not directly manipulate LocalStorage outside of stores
3. Question difficulty filtering happens in useQuiz hook
4. Results are automatically saved when quiz finishes
5. Settings changes persist automatically via Zustand middleware

## Error Handling

The application handles edge cases:
- Missing username defaults to 'noname'
- Invalid difficulty defaults to 'easy'
- Empty question pool is prevented by filtering logic
- LocalStorage failures fall back to in-memory state
