import React from 'react';
import './SimpleNotification.css';

const SimpleNotification = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="notification-overlay" onClick={onClose}>
            <div className="notification-card" onClick={(e) => e.stopPropagation()}>
                <p className="notification-message">{message}</p>
                <button className="notification-button" onClick={onClose}>
                    OK
                </button>
            </div>
        </div>
    );
};

export default SimpleNotification;
