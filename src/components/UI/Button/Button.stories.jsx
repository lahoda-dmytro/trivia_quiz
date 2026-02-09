import React from 'react';
import Button from './Button';

export default {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Button text content',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler function',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state of the button',
        },
    },
};

// Default story
export const Default = {
    args: {
        children: 'Click me',
        disabled: false,
    },
};

// Primary action button
export const Primary = {
    args: {
        children: 'Почати вікторину',
        disabled: false,
    },
};

// Disabled state
export const Disabled = {
    args: {
        children: 'Disabled Button',
        disabled: true,
    },
};

// Long text
export const LongText = {
    args: {
        children: 'This is a button with very long text content',
        disabled: false,
    },
};
