import { useState } from 'react';
import { quizQuestions } from '../data/quizQuestions';

export const useQuiz = () => {

    const [status, setStatus] = useState('ready');

    const [currentIndex, setCurrentIndex] = useState(0);

    const [userAnswers, setUserAnswers] = useState([]);

    const questions = quizQuestions;
    const totalQuestions = questions.length;
    const currentQuestion = questions[currentIndex];

    const score = status === 'finished'
        ? userAnswers.reduce((acc, answer, index) => {
            if (answer === questions[index].correctAnswer) {
                return acc + 1;
            }
            return acc;
        }, 0)
        : 0;

    const startQuiz = () => {
        setStatus('active');
    };

    const answerQuestion = (selectedIndex) => {
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedIndex]);

        const isLastQuestion = currentIndex === totalQuestions - 1;

        if (isLastQuestion) {
            setStatus('finished');
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const restartQuiz = () => {
        setStatus('ready');
        setCurrentIndex(0);
        setUserAnswers([]);
    };

    return {
        status,
        questions,
        currentQuestion,
        userAnswers,
        totalQuestions,
        score,
        startQuiz,
        answerQuestion,
        restartQuiz,
    };
};