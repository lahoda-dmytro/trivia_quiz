import React from 'react';
import styles from './GamePage.module.css';
import QuestionCard from '../../components/Quiz/QuestionCard';
// import Button from '../../components/UI/Button';


const GamePage = ({questionData, totalQuestions, onAnswer, currentIndex }) => {
    return (
        <div className={styles.page}>
            <QuestionCard
                questionData={questionData}
                currentIndex={currentIndex}
                totalQuestions={totalQuestions}
                onAnswer={onAnswer}
            />
        </div>
    );
};


export default GamePage;