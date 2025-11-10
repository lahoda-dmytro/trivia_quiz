import React from 'react';
import styles from './GamePage.module.css';
import QuestionCard from '../../components/Quiz/QuestionCard';
// import Button from '../../components/UI/Button';


const GamePage = ({questionData, totalQuestions, onAnswer, currentIndex }) => {

    if (!questionData) {
        return null;
    }

    return (
        <div className={styles.page}>
            <QuestionCard
                key={questionData.id}
                questionData={questionData}
                currentIndex={currentIndex}
                totalQuestions={totalQuestions}
                onAnswer={onAnswer}
            />
        </div>
    );
};


export default GamePage;