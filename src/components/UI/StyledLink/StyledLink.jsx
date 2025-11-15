import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StyledLink.module.css';

const StyledLink = (props) => {
    return (
        <Link {...props} className={styles.link} />
    );
};

export default StyledLink;