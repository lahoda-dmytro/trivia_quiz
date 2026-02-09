import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './SettingsForm.module.css';
import { useSettingsStore } from '../../store/useSettingsStore';

/**
 * Pure presentational component that renders the quiz settings form.
 * Does not depend on the global store.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.numQuestions - Initial number of questions
 * @param {string} props.difficulty - Initial difficulty level
 * @param {function(Object): void} props.onSettingsChange - Callback when settings change
 * @returns {JSX.Element} The settings form
 */
export const SettingsFormView = ({ numQuestions, difficulty, onSettingsChange }) => {
    const { register, watch, reset } = useForm({
        defaultValues: { numQuestions, difficulty },
    });

    // Sync form with incoming prop changes
    useEffect(() => {
        reset({ numQuestions, difficulty });
    }, [numQuestions, difficulty, reset]);

    useEffect(() => {
        const subscription = watch((values) => {
            onSettingsChange(values);
        });

        return () => subscription.unsubscribe();
    }, [watch, onSettingsChange]);

    return (
        <form className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="numQuestions">Кількість питань:</label>
                <select id="numQuestions" {...register('numQuestions')}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>

            <div className={styles.field}>
                <label htmlFor="difficulty">Складність:</label>
                <select id="difficulty" {...register('difficulty')}>
                    <option value="easy">Легка</option>
                    <option value="medium">Середня</option>
                    <option value="hard">Складна</option>
                </select>
            </div>
        </form>
    );
};

/**
 * Connected container component for Quiz Settings.
 * Connects SettingsFormView to the Zustand store.
 *
 * @component
 * @returns {JSX.Element} The connected settings form
 */
const SettingsForm = () => {
    const { numQuestions, difficulty, setSettings } = useSettingsStore();

    return (
        <SettingsFormView
            numQuestions={numQuestions}
            difficulty={difficulty}
            onSettingsChange={setSettings}
        />
    );
};

export default SettingsForm;