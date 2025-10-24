import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultsPage from './pages/ResultsPage';

function App() {
    const [currentPage, setCurrentPage] = useState('start');

    const handleStartQuiz = () => {
        setCurrentPage('game');
    };

    const handleFinishQuiz = () => {
        setCurrentPage('results');
    };

    const handleRestart = () => {
        setCurrentPage('start');
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'game':
                return <GamePage onFinishQuiz={handleFinishQuiz} />;
            case 'results':
                return <ResultsPage onRestart={handleRestart} />;
            case 'start':
            default:
                return <StartPage onStartQuiz={handleStartQuiz} />;
        }
    };

    return (
        <div className="App">
            {renderPage()}
        </div>
    );
}

export default App;