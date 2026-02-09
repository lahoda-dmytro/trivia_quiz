import React, { useState } from 'react';
import { SettingsFormView } from './SettingsForm';

// Pure wrapper that manages state locally for Storybook isolation
const SettingsFormStoryWrapper = ({ initialNumQuestions, initialDifficulty }) => {
    // Local state instead of global store
    const [values, setValues] = useState({
        numQuestions: initialNumQuestions,
        difficulty: initialDifficulty
    });

    const handleChange = (newValues) => {
        setValues(prev => ({ ...prev, ...newValues }));
        console.log('Settings changed:', newValues);
    };

    return (
        <SettingsFormView
            numQuestions={initialNumQuestions}
            difficulty={initialDifficulty}
            onSettingsChange={handleChange}
        />
    );
};

export default {
    title: 'Forms/SettingsForm',
    component: SettingsFormStoryWrapper,
    tags: ['autodocs'],
    argTypes: {
        initialNumQuestions: {
            control: { type: 'select', options: ['5', '10', '15'] },
            description: 'Number of questions',
        },
        initialDifficulty: {
            control: { type: 'select', options: ['easy', 'medium', 'hard'] },
            description: 'Difficulty level',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Pure presentational component for quiz settings. Configuring questions count and difficulty.',
            },
        },
    },
};

// Default state - 5 questions, easy difficulty
export const Default = {
    args: {
        initialNumQuestions: '5',
        initialDifficulty: 'easy',
    },
    parameters: {
        docs: {
            description: {
                story: 'Default settings: 5 questions with easy difficulty',
            },
        },
    },
};

// Medium difficulty preset - 10 questions, medium difficulty
export const MediumDifficulty = {
    args: {
        initialNumQuestions: '10',
        initialDifficulty: 'medium',
    },
    parameters: {
        docs: {
            description: {
                story: 'Medium settings: 10 questions with medium difficulty',
            },
        },
    },
};

// Hard difficulty preset - 15 questions, hard difficulty
export const HardDifficulty = {
    args: {
        initialNumQuestions: '15',
        initialDifficulty: 'hard',
    },
    parameters: {
        docs: {
            description: {
                story: 'Hard settings: 15 questions with hard difficulty',
            },
        },
    },
};
