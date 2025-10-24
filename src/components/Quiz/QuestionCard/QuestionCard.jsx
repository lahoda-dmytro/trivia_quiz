import React from 'react';
import styles from './QuestionCard.module.css';

const QuestionCard = ({ questionData }) => {
    if (!questionData) {
        return null;
    }

    const { question, answers, currentQuestion, totalQuestions } = questionData;

    return (
        <div className={styles.card}>
            <p className={styles.counter}>
                Питання {currentQuestion} / {totalQuestions}
            </p>
            <h2 className={styles.questionText}>{question}</h2>
            <div className={styles.answersContainer}>
                {answers.map((answer, index) => (
                    <button key={index} className={styles.answerButton}>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;