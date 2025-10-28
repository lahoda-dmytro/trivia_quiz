import React from 'react';
import styles from './ResultsPage.module.css';
import Button from '../../components/UI/Button';

const ResultsPage = ({score, totalQuestions, onRestart}) => {

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Результати</h1>
            <div className={styles.resultsContainer}>
                <p className={styles.scoreText}>
                    Ваш результат:
                </p>
                <p className={styles.score}>
                    {score} / {totalQuestions}
                </p>
                <p className={styles.feedback}>
                    {score > totalQuestions / 2 ? 'Чудова робота!' : 'Варто спробувати ще!'}
                </p>
            </div>
            <Button onClick={onRestart}>
                Спробувати ще раз
            </Button>
        </div>
    );
};

export default ResultsPage;