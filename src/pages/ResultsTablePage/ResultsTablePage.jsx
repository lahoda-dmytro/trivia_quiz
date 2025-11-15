import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useResultsStore } from '../../store/useResultsStore';
import styles from './ResultsTablePage.module.css';

const ResultsTablePage = () => {
    const { username } = useParams();

    const { resultsByUser, clearUserResults } = useResultsStore();

    const userResults = resultsByUser[username] || [];

    const handleClearHistory = () => {
        if (window.confirm(`Are you sure you want to delete the history for the player ${username}?`)) {
            clearUserResults(username);
        }
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Результати гравця: {username}</h1>

            {userResults.length > 0 ? (
                <>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Складність</th>
                                <th>Результат</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userResults.map((result, index) => (
                                <tr key={index}>
                                    <td>{new Date(result.date).toLocaleString()}</td>
                                    <td>{result.difficulty}</td>
                                    <td>{result.score} / {result.total}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.actions}>
                        <button onClick={handleClearHistory} className={styles.clearButton}>
                            Очистити історію
                        </button>
                    </div>
                </>
            ) : (
                <p className={styles.noResults}>
                    У гравця {username} ще немає результатів.
                </p>
            )}

            <Link to="/" className={styles.link}>
                На головну
            </Link>
        </div>
    );
};

export default ResultsTablePage;