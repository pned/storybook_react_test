import React from 'react';

import {Button} from './index';
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";

export default {
    title: 'Mobile/Components',
    component: Button,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphonex'
        },
    }
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});

button.parameters = {
    viewport: {
        defaultViewport: 'iphonex'
    }
};
button.args = {
    enabled: false,
    children: 'Je Valide'
};
