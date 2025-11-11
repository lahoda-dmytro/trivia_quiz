import { useState } from 'react';
import { quizQuestions as allQuestions } from '../data/quizQuestions';
import { useSettingsStore } from '../store/useSettingsStore';

const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

export const useQuiz = () => {
    const { numQuestions, difficulty } = useSettingsStore();

    const [status, setStatus] = useState('ready');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);

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
        let filteredQuestions;

        switch (difficulty) {
            case 'hard':
                filteredQuestions = allQuestions;
                break;
            case 'medium':
                filteredQuestions = allQuestions.filter(
                    q => q.difficulty === 'easy' || q.difficulty === 'medium'
                );
                break;
            case 'easy':
            default:
                filteredQuestions = allQuestions.filter(q => q.difficulty === 'easy');
                break;
        }

        const sessionQuestions = shuffleArray(filteredQuestions).slice(0, Number(numQuestions));

        setQuestions(sessionQuestions);
        setCurrentIndex(0);
        setUserAnswers([]);
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
    };

    return {
        status,
        currentQuestion,
        totalQuestions,
        score,
        currentIndex,
        startQuiz,
        answerQuestion,
        restartQuiz,
    };
};