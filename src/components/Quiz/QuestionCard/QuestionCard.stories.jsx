import React from 'react';
import QuestionCard from './QuestionCard';

const sampleQuestion = {
    question: 'Яка найвища гора у світі?',
    options: ['Кіліманджаро', 'Еверест', 'Монблан', 'Ельбрус'],
    correctAnswer: 1,
    difficulty: 'easy',
};

export default {
    title: 'Quiz/QuestionCard',
    component: QuestionCard,
    tags: ['autodocs'],
    argTypes: {
        currentIndex: {
            control: { type: 'number', min: 0, max: 14 },
            description: 'Current question index (zero-based)',
        },
        totalQuestions: {
            control: { type: 'number', min: 1, max: 15 },
            description: 'Total number of questions in the quiz',
        },
        onAnswer: {
            action: 'answered',
            description: 'Callback when user selects an answer option',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Displays a quiz question with its answer options. Shows a counter indicating progress through the quiz.',
            },
        },
    },
};

export const Default = {
    args: {
        questionData: sampleQuestion,
        currentIndex: 0,
        totalQuestions: 5,
    },
};

export const MiddleOfQuiz = {
    args: {
        questionData: {
            question: 'Скільки планет у Сонячній системі?',
            options: ['7', '8', '9', '10'],
            correctAnswer: 1,
            difficulty: 'medium',
        },
        currentIndex: 4,
        totalQuestions: 10,
    },
    parameters: {
        docs: {
            description: {
                story: 'Question card in the middle of a 10-question quiz',
            },
        },
    },
};

export const LastQuestion = {
    args: {
        questionData: {
            question: 'Хто написав "Кобзар"?',
            options: ['Іван Франко', 'Леся Українка', 'Тарас Шевченко', 'Григорій Сковорода'],
            correctAnswer: 2,
            difficulty: 'easy',
        },
        currentIndex: 14,
        totalQuestions: 15,
    },
    parameters: {
        docs: {
            description: {
                story: 'The last question in a 15-question quiz',
            },
        },
    },
};

export const LongQuestion = {
    args: {
        questionData: {
            question: 'Який хімічний елемент має найбільшу атомну масу серед стабільних елементів періодичної таблиці Менделєєва?',
            options: [
                'Уран (U)',
                'Свинець (Pb)',
                'Вісмут (Bi)',
                'Торій (Th)',
            ],
            correctAnswer: 2,
            difficulty: 'hard',
        },
        currentIndex: 2,
        totalQuestions: 5,
    },
    parameters: {
        docs: {
            description: {
                story: 'A question with longer text to test layout with verbose content',
            },
        },
    },
};
