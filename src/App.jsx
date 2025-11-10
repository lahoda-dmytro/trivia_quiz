import React from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
//import ResultsPage from './pages/ResultsPage';
import { useQuiz } from './hooks/useQuiz';
import { SettingsProvider } from './context/SettingsContext';
import Modal from './components/UI/Modal/Modal';
import ResultsModal from './components/Quiz/ResultsModal/ResultsModal';

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

            {status === 'finished' && (
                <Modal onClose={restartQuiz}>
                    <ResultsModal
                        score={score}
                        totalQuestions={totalQuestions}
                        onRestart={restartQuiz}
                    />
                </Modal>
            )}

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