import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {

    const [settings, setSettings] = useState({
        numQuestions: '5',
        difficulty: 'easy',
    });

    useEffect(() => {
        const savedSettings = localStorage.getItem('quizSettings');
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('quizSettings', JSON.stringify(settings));
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
