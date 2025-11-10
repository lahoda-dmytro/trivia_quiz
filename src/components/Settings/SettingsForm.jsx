import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import styles from './SettingsForm.module.css';
import { useSettings } from '../../context/SettingsContext';

const SettingsForm = () => {
    const { settings, setSettings } = useSettings();

    const { register, watch } = useForm({
        defaultValues: settings,
    });

    const watchedValues = watch();

    const numQuestions = watchedValues.numQuestions;
    const difficulty = watchedValues.difficulty;

    useEffect(() => {
        setSettings({ numQuestions, difficulty });
    }, [numQuestions, difficulty, setSettings]);

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

export default SettingsForm;