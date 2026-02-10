import React from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import { useQuiz } from './hooks/useQuiz';
import Modal from './components/UI/Modal/Modal';
import ResultsModal from './components/Quiz/ResultsModal/ResultsModal';
import CookieBanner from './components/CookieBanner/CookieBanner';
import Header from './components/Header/Header';
import CookieSettings from './components/CookieSettings/CookieSettings';
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

    const handleRestartQuiz = () => {
        restartQuiz();
        navigate('/');
    };

    return (
        <div className="App">
            <Header />
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
                <Route path="/cookie-settings" element={<CookieSettings />} />
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
    return (
        <>
            <AppContent />
            <CookieBanner />
        </>
    );
}

export default App;