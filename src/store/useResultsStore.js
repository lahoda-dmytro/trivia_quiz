import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useResultsStore = create(
    persist(
        (set) => ({
            results: [],

            addResult: (newResult) => {
                set((state) => ({
                    results: [...state.results, newResult]
                }));
            },

            clearResults: () => set({ results: [] }),
        }),
        {
            name: 'quiz-results',
        }
    )
);