import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useResultsStore } from '../../store/useResultsStore';
import styles from './ResultsTablePage.module.css';
import StyledLink from '../../components/UI/StyledLink';
import Button from '../../components/UI/Button';
import SimpleNotification from '../../components/SimpleNotification/SimpleNotification';

const ResultsTablePage = () => {
    const { username } = useParams();
    const [showConfirm, setShowConfirm] = useState(false);

    const { resultsByUser, clearUserResults } = useResultsStore();

    const userResults = resultsByUser[username] || [];

    const handleClearHistory = () => {
        setShowConfirm(true);
    };

    const confirmClear = () => {
        clearUserResults(username);
        setShowConfirm(false);
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

            {showConfirm && (
                <ConfirmModal
                    message={`Ви впевнені, що хочете видалити історію для гравця ${username}?`}
                    onConfirm={confirmClear}
                    onCancel={() => setShowConfirm(false)}
                />
            )}
        </div>
    );
};

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="notification-overlay" onClick={onCancel}>
            <div className="notification-card" onClick={(e) => e.stopPropagation()}>
                <p className="notification-message">{message}</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                        className="notification-button"
                        style={{ background: '#dc3545' }}
                        onClick={onConfirm}
                    >
                        Видалити
                    </button>
                    <button
                        className="notification-button"
                        style={{ background: '#6c757d' }}
                        onClick={onCancel}
                    >
                        Скасувати
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsTablePage;