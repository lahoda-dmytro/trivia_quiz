import React from 'react';
import styles from './NotFoundPage.module.css';
import StyledLink from '../../components/UI/StyledLink';

const NotFoundPage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>На жаль, сторінку не знайдено.</p>
            <StyledLink to="/" className={styles.link}>
                Повернутися на головну
            </StyledLink>
        </div>
    );
};

export default NotFoundPage;