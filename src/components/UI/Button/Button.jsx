import React from 'react';
import styles from './Button.module.css';

/**
 * Reusable Button component for user interactions.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be displayed inside the button
 * @param {function} props.onClick - The function to be called when the button is clicked
 * @param {boolean} [props.disabled=false] - Whether the button should be disabled
 * @returns {JSX.Element} The Button component
 *
 * @example
 * <Button onClick={() => console.log('clicked')}>Click Me</Button>
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
