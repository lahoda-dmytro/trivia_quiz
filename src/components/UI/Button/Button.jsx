import React from 'react';
import styles from './Button.module.css';

/**
 * Reusable Button component for user interactions.
 * 
 * @example
 * ```jsx
 * <Button onClick={() => console.log('clicked')}>Click Me</Button>
 * <Button disabled>Disabled Button</Button>
 * ```
 */
const Button = ({ children, onClick, disabled }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
