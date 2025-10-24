import React from 'react';
import styles from './GamePage.module.css';
import QuestionCard from '../../components/Quiz/QuestionCard';
import Button from '../../components/UI/Button';

const dummyQuestion = {
    currentQuestion: 1,
    totalQuestions: 10,
    question: 'Який фреймворк використовується для цього додатку?',
    answers: [
        'Angular',
        'Vue',
        'React',
        'Svelte'
    ]
};

const GamePage = ({onFinishQuiz}) => {
    return (
        <div className={styles.page}>
            <QuestionCard questionData={dummyQuestion} />
            <div style={{ marginTop: '20px' }}>
                <Button onClick={onFinishQuiz}>Завершити</Button>
            </div>
        </div>
    );
};


export default GamePage;