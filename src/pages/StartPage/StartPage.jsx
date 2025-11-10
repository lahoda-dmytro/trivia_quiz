import React from 'react';
import styles from './StartPage.module.css';
import Button from '../../components/UI/Button';
import SettingsForm from '../../components/Settings/SettingsForm';

const StartPage = ({ onStartQuiz }) => {

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Вікторина (Trivia Quiz)</h1>
            <p className={styles.description}>Завдання — вибрати правильний варіант і набрати якомога більше очок.</p>
            {/*<p className={styles.questionCount}>Всього питань: {totalQuestions}</p>*/}
            <SettingsForm />
            <Button onClick={onStartQuiz}>
                Почати вікторину
            </Button>
        </div>
    );
};

export default StartPage;
