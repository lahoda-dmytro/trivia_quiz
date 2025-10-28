import React from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';
import { useQuiz } from './hooks/useQuiz';

function App() {
    const {
        status,
        currentQuestion,
        totalQuestions,
        score,
        startQuiz,
        answerQuestion,
        restartQuiz,
    } = useQuiz();
    return (
        <div className="App">
            {status === 'ready' && (
                <StartPage onStartQuiz={startQuiz} totalQuestions={totalQuestions} />
            )}

            {status === 'active' && (
                <GamePage
                    questionData={currentQuestion}
                    totalQuestions={totalQuestions}
                    onAnswer={answerQuestion}
                />
            )}

            {status === 'finished' && (
                <ResultsPage
                    score={score}
                    totalQuestions={totalQuestions}
                    onRestart={restartQuiz}
                />
            )}
        </div>
    );
}
export default App;