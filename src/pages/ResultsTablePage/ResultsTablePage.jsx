import React from 'react';
import { useParams } from 'react-router-dom';
import { useResultsStore } from '../../store/useResultsStore';
import styles from './ResultsTablePage.module.css';
import StyledLink from '../../components/UI/StyledLink';
import Button from '../../components/UI/Button';

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
            <StyledLink to="/" className={styles.link}>
                На головну
            </StyledLink>
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

                </>
            ) : (
                <p className={styles.noResults}>
                    У гравця {username} ще немає результатів.
                </p>
            )}
            <Button onClick={handleClearHistory} className={styles.clearButton}>
                Очистити історію
            </Button>
        </div>
    );
};

export default ResultsTablePage;