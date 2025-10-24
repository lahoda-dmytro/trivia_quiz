import React from 'react';
import styles from './ResultsPage.module.css';
import Button from '../../components/UI/Button';

const ResultsPage = ({onRestart}) => {
    const correctAnswers = 8;
    const totalQuestions = 10;

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Результати</h1>
            <div className={styles.resultsContainer}>
                <p className={styles.scoreText}>
                    Ваш результат:
                </p>
                <p className={styles.score}>
                    {correctAnswers} / {totalQuestions}
                </p>
                <p className={styles.feedback}>
                    Чудова робота!
                </p>
            </div>
            <Button onClick={onRestart}>
                Спробувати ще раз
            </Button>
        </div>
    );
};

export default ResultsPage;