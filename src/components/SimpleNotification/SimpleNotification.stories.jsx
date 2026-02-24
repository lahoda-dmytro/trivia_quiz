import React from 'react';
import SimpleNotification from './SimpleNotification';

export default {
    title: 'UI/SimpleNotification',
    component: SimpleNotification,
    tags: ['autodocs'],
    argTypes: {
        message: {
            control: 'text',
            description: 'Notification message to display',
        },
        onClose: {
            action: 'closed',
            description: 'Callback when notification is dismissed',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A modal notification overlay used for alerts and confirmations. Renders on top of everything with a semi-transparent backdrop.',
            },
        },
    },
};

export const Default = {
    args: {
        message: "Введіть ім'я перед початком гри",
    },
    parameters: {
        docs: {
            description: {
                story: 'Standard notification with a short validation message',
            },
        },
    },
};

export const SuccessMessage = {
    args: {
        message: 'Гру завершено! Ваш результат збережено.',
    },
    parameters: {
        docs: {
            description: {
                story: 'Notification displaying a success message after quiz completion',
            },
        },
    },
};

export const LongMessage = {
    args: {
        message: 'Ви впевнені, що хочете видалити всю історію ігор? Цю дію неможливо буде скасувати після підтвердження.',
    },
    parameters: {
        docs: {
            description: {
                story: 'Notification with a longer message to test text wrapping',
            },
        },
    },
};

export const Empty = {
    args: {
        message: '',
    },
    parameters: {
        docs: {
            description: {
                story: 'When message is empty, the component renders nothing',
            },
        },
    },
};
