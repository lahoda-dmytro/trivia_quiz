import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './SettingsForm.module.css';
import Button from '../UI/Button/';

const SettingsForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Обрані налаштування:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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