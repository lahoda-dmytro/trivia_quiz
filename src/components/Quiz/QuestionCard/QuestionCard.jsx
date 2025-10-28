import React from 'react';
import styles from './QuestionCard.module.css';

const QuestionCard = ({ questionData, totalQuestions, onAnswer }) => {
    if (!questionData) {
        return null;
    }

    const { question, options, id } = questionData;
    const currentQuestionNumber = id;

    return (
        <div className={styles.card}>
            <p className={styles.counter}>
                Питання {currentQuestionNumber} / {totalQuestions}
            </p>
            <h2 className={styles.questionText}>{question}</h2>
            <div className={styles.answersContainer}>
                {options.map((option, index) => (
                    <button key={index} className={styles.answerButton} onClick={() => onAnswer(index)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;