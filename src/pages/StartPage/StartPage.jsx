import React, { useState, useEffect } from 'react';
import styles from './StartPage.module.css';
import Button from '../../components/UI/Button';
import SettingsForm from '../../components/Settings/SettingsForm';
import { useNavigate } from 'react-router-dom';
import StyledLink from '../../components/UI/StyledLink';
import SimpleNotification from '../../components/SimpleNotification/SimpleNotification';

const StartPage = ({ onStartQuiz }) => {

    const [username, setUsername] = useState(
        () => localStorage.getItem('quizUsername') || ''
    );
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('quizUsername', username);
    }, [username]);

    const handleStart = () => {
        if (!username.trim()) {
            setNotification("Введіть ім'я перед початком гри");
            return;
        }
        onStartQuiz();
        navigate(`/game/${encodeURIComponent(username.trim())}`);
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Вікторина (Trivia Quiz)</h1>
            <p className={styles.description}>Завдання — вибрати правильний варіант і набрати якомога більше очок.</p>
            <StyledLink to={`/results/${username.trim() || 'default'}`}
                className={styles.resultsLink}
            >Таблиця результатів </StyledLink>
            <SettingsForm />
            <div className={styles.usernameInput}>
                <input
                    type="text"
                    placeholder="Введіть ваше ім'я"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <Button onClick={handleStart}>
                Почати вікторину
            </Button>

            <SimpleNotification
                message={notification}
                onClose={() => setNotification('')}
            />
        </div>
    );
};

export default StartPage;
