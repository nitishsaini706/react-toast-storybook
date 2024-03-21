// Toast.stories.js

import React from 'react';
import Toast from './Toast';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Toast',
    component: Toast,
    argTypes: {
        status: {
            control: { type: 'select', options: ['info', 'warning', 'error', 'success'] },
            description: 'Sets the type of the Toast',
        },
        icon: {
            control: 'boolean',
            description: 'Shows the icon',
        },
        title: {
            control: 'text',
            description: 'The title of the Toast',
        },
        message: {
            control: 'text',
            description: 'The message of the Toast',
        },
        showAction: {
            control: 'boolean',
            description: 'Shows the close action button',
        },
        actionLabel: {
            control: 'text',
            description: 'Label for the action button',
        },
        onClose: {
            action: 'close clicked',
            description: 'Event when the close action is clicked',
        },
        onActionClick: {
            action: 'action button clicked',
            description: 'Event when the action button is clicked',
        },
    },
};
const Template = (args) => <Toast {...args} />;

export const InfoToast = Template.bind({});
InfoToast.args = {
    status: 'info',
    icon: true,
    title: 'Toast Title',
    message: 'Information',
    showAction: true,
    actionText:'Retry',
    onClose: action('close clicked'),
    onActionClick: action('action button clicked'),
};

export const WarningToast = Template.bind({});
WarningToast.args = {
    status: 'warning',
    icon: true,
    title: 'Warning!',
    message: 'Warning',
    showAction: true,
    actionText: 'Acknowledge',
    onClose: action('close clicked'),
    onActionClick: action('action button clicked'),
};

export const ErrorToast = Template.bind({});
ErrorToast.args = {
    status: 'error',
    icon: true,
    title: 'Error!',
    message: 'Error',
    showAction: true,
    actionText: 'Retry',
    onClose: action('close clicked'),
    onActionClick: action('action button clicked'),
};

export const SuccessToast = Template.bind({});
SuccessToast.args = {
    status: 'success',
    icon: true,
    title: 'Success!',
    message: 'Success',
    showAction: true,
    actionText: 'Dismiss',
    onClose: action('close clicked'),
    onActionClick: action('action button clicked'),
};


export const DefaultToast = Template.bind({});
DefaultToast.args = {
    status: 'info',
    icon: true,
    title: 'Toast Title',
    message: 'Message Here',
    showAction: true,
    actionLabel: 'Action', // Changed from actionText to actionLabel
    onClose: action('close clicked'),
    onActionClick: action('action button clicked'),
};

