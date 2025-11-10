import React from 'react';
import styles from './ResultsModal.module.css';
import Button from '../../UI/Button';

const ResultsModal = ({ score, totalQuestions, onRestart }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Гру завершено!</h1>
            <p className={styles.scoreText}>Ваш фінальний результат:</p>
            <p className={styles.score}>
                {score} / {totalQuestions}
            </p>
            <p className={styles.feedback}>
                {score > totalQuestions / 2 ? 'Чудова робота!' : 'Варто спробувати ще!'}
            </p>
            <Button onClick={onRestart}>
                Почати заново
            </Button>
        </div>
    );
};

export default ResultsModal;