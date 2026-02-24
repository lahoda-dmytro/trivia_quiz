import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import StyledLink from './StyledLink';

export default {
    title: 'UI/StyledLink',
    component: StyledLink,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
    argTypes: {
        to: {
            control: 'text',
            description: 'Navigation target path',
        },
        children: {
            control: 'text',
            description: 'Link text content',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A styled navigation link built on top of React Router Link. Used for in-app navigation with consistent styling.',
            },
        },
    },
};

export const Default = {
    args: {
        to: '/',
        children: 'На головну',
    },
};

export const ResultsLink = {
    args: {
        to: '/results/player',
        children: 'Таблиця результатів',
    },
    parameters: {
        docs: {
            description: {
                story: 'Link to the results table page',
            },
        },
    },
};

export const LongText = {
    args: {
        to: '/some-page',
        children: 'Перейти до налаштувань вікторини та змінити параметри',
    },
    parameters: {
        docs: {
            description: {
                story: 'Link with longer text content',
            },
        },
    },
};
