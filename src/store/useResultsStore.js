import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useResultsStore = create(
    persist(
        (set) => ({
            resultsByUser: {},

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
        }
    )
);