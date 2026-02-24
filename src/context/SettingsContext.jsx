import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCookieConsentValue } from 'react-cookie-consent';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
    const hasConsent = () => getCookieConsentValue('quizCookieConsent') === 'true';

    const [settings, setSettings] = useState({
        numQuestions: '5',
        difficulty: 'easy',
    });

    useEffect(() => {
        if (hasConsent()) {
            const savedSettings = localStorage.getItem('quizSettings');
            if (savedSettings) {
                setSettings(JSON.parse(savedSettings));
            }
        }
    }, []);

    useEffect(() => {
        if (hasConsent()) {
            localStorage.setItem('quizSettings', JSON.stringify(settings));
        }
    }, [settings]);

    const value = {
        settings,
        setSettings,
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

const useSettings = () => {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};

export { SettingsProvider, useSettings };
