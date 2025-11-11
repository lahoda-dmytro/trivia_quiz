import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSettingsStore = create(
    persist(
        (set) => ({
            numQuestions: '5',
            difficulty: 'easy',

            setSettings: (newSettings) => {
                set((state) => ({
                    ...state,
                    ...newSettings,
                }));
            },
        }),
        {
            name: 'quiz-settings',
        }
    )
);