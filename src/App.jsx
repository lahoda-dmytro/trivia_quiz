import React from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
//import ResultsPage from './pages/ResultsPage';
import { useQuiz } from './hooks/useQuiz';
//import { SettingsProvider } from './context/SettingsContext';
import Modal from './components/UI/Modal/Modal';
import ResultsModal from './components/Quiz/ResultsModal/ResultsModal';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ResultsTablePage from './pages/ResultsTablePage/ResultsTablePage';

function AppContent() {
    const {
        status,
        currentQuestion,
        currentIndex,
        totalQuestions,
        score,
        startQuiz,
        answerQuestion,
        restartQuiz,
    } = useQuiz();

    const navigate = useNavigate();

    // const handleStartQuiz = () => {
    //     startQuiz();
    //     navigate('/game');
    // };

    const handleRestartQuiz = () => {
        restartQuiz();
        navigate('/');
    };

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<StartPage onStartQuiz={startQuiz} />}
                />
                <Route
                    path="/game/:username"
                    element={
                        status === 'active' || status === 'finished' ? (
                            <GamePage
                                questionData={currentQuestion}
                                currentIndex={currentIndex}
                                totalQuestions={totalQuestions}
                                onAnswer={answerQuestion}
                            />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }
                />
                <Route path="/results/:username" element={<ResultsTablePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            {status === 'finished' && (
                <Modal onClose={handleRestartQuiz}>
                    <ResultsModal
                        score={score}
                        totalQuestions={totalQuestions}
                        onRestart={handleRestartQuiz}
                    />
                </Modal>
            )}
        </div>
    );
}

function App() {
    return <AppContent />;

}

export default App;