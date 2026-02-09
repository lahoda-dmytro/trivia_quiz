import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getCookieConsentValue } from 'react-cookie-consent';

/**
 * Custom storage engine that checks for GDPR consent before writing to localStorage.
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
 * Zustand store for managing quiz results.
 * Persists results to localStorage if consent is given.
 *
 * @typedef {Object} ResultsStore
 * @property {Object.<string, Array>} resultsByUser - Map of usernames to their result history
 * @property {function(string, Object): void} addResult - Adds a new result for a user
 * @property {function(string): void} clearUserResults - Clears results for a specific user
 */

/**
 * Hook to access the results store.
 *
 * @type {function(): ResultsStore}
 */
export const useResultsStore = create(
    persist(
        (set) => ({
            resultsByUser: {},

            /**
             * Adds a new quiz result for a user.
             * @param {string} username - The username
             * @param {Object} newResult - The result object to add
             */
            addResult: (username, newResult) => {
                set((state) => {
                    const userResults = state.resultsByUser[username] || [];

                    return {
                        resultsByUser: {
                            ...state.resultsByUser,
                            [username]: [...userResults, newResult],
                        },
                    };
                });
            },

            /**
             * Clears all results for a specific user.
             * @param {string} username - The username to clear results for
             */
            clearUserResults: (username) => {
                set((state) => {
                    const newResultsByUser = { ...state.resultsByUser };
                    delete newResultsByUser[username];
                    return {
                        resultsByUser: newResultsByUser,
                    };
                });
            },
        }),
        {
            name: 'quiz-results-by-user',
            storage: createJSONStorage(() => consentAwareStorage),
        }
    )
);