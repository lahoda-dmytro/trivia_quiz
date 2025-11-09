import React from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
//import ResultsPage from './pages/ResultsPage';
import { useQuiz } from './hooks/useQuiz';
import { SettingsProvider } from './context/SettingsContext';

function AppContent() {
    const {
        status,
        currentQuestion,
        totalQuestions,
        score,
        currentIndex,
        startQuiz,
        answerQuestion,
        restartQuiz,
    } = useQuiz();
    return (
        <div className="App">
            {status === 'ready' && (
                <StartPage onStartQuiz={startQuiz} />
            )}

            {status === 'active' && (
                <GamePage
                    questionData={currentQuestion}
                    currentIndex={currentIndex}
                    totalQuestions={totalQuestions}
                    onAnswer={answerQuestion}
                />
            )}

            {/*{status === 'finished' && (*/}
            {/*    <ResultsPage*/}
            {/*        score={score}*/}
            {/*        totalQuestions={totalQuestions}*/}
            {/*        onRestart={restartQuiz}*/}
            {/*    />*/}
            {/*)}*/}
        </div>
    );
}

function App() {
    return (
        <SettingsProvider>
            <AppContent />
        </SettingsProvider>
    );
}

export default App;