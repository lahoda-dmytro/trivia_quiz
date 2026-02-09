import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getCookieConsentValue } from 'react-cookie-consent';

/**
 * Custom storage engine that checks for GDPR consent before writing to localStorage.
 * Reads from localStorage regardless of consent to load saved settings,
 * but only writes new settings if the user has accepted cookies.
 */
const consentAwareStorage = {
    getItem: (name) => {
        return localStorage.getItem(name);
    },
    setItem: (name, value) => {
        const consent = getCookieConsentValue('quizCookieConsent');
        if (consent === 'true') {
            localStorage.setItem(name, value);
        }
    },
    removeItem: (name) => {
        localStorage.removeItem(name);
    },
};

/**
 * Zustand store for managing quiz settings.
 * Persists data to localStorage using the 'quiz-settings' key.
 *
 * @typedef {Object} SettingsStore
 * @property {string} numQuestions - Number of questions to fetch (e.g., '5', '10', '15')
 * @property {string} difficulty - Difficulty level of the questions ('easy', 'medium', 'hard')
 * @property {function(Object): void} setSettings - Function to update quiz settings
 */

/**
 * Hook to access the settings store.
 *
 * @type {function(): SettingsStore}
 */
export const useSettingsStore = create(
    persist(
        (set) => ({
            numQuestions: '5',
            difficulty: 'easy',

            /**
             * Updates the quiz settings.
             * @param {Object} newSettings - Object containing new settings to merge
             */
            setSettings: (newSettings) => {
                set((state) => ({
                    ...state,
                    ...newSettings,
                }));
            },
        }),
        {
            name: 'quiz-settings',
            storage: createJSONStorage(() => consentAwareStorage),
        }
    )
);