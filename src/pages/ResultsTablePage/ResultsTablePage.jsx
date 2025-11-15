import React from 'react';
import { Link } from 'react-router-dom';
import { useResultsStore } from '../../store/useResultsStore';
import styles from './ResultsTablePage.module.css';

const ResultsTablePage = () => {
    const { results, clearResults } = useResultsStore();

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Таблиця Результатів</h1>

            {results.length > 0 ? (
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
                            {results.map((result, index) => (
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
                        <button onClick={clearResults} className={styles.clearButton}>
                            Очистити історію
                        </button>
                    </div>
                </>
            ) : (
                <p className={styles.noResults}>
                    Ви ще не зіграли жодної гри. Час це виправити!
                </p>
            )}

            <Link to="/" className={styles.link}>
                Повернутися на головну
            </Link>
        </div>
    );
};

export default ResultsTablePage;