import React from 'react';
import styles from './GamePage.module.css';
import QuestionCard from '../../components/Quiz/QuestionCard';
// import Button from '../../components/UI/Button';


const GamePage = ({questionData, totalQuestions, onAnswer }) => {
    return (
        <div className={styles.page}>
            <QuestionCard
                questionData={questionData}
                totalQuestions={totalQuestions}
                onAnswer={onAnswer}
            />
        </div>
    );
};


export default GamePage;