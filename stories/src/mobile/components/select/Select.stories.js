import React from 'react';

import {Select} from './index';
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";

export default {
    title: 'Mobile/Components',
    component: Select,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphonex'
        },
    }
};

const Template = (args) => <Select {...args} />;

export const select = Template.bind({});

select.parameters = {
    viewport: {
        defaultViewport: 'iphonex'
    }
};
select.args = {
    inputList: [
        {id: '1', label: 'choix 1', blob: {}},
        {id: '2', label: 'choix 2', blob: {}},
        {id: '3', label: 'choix 3', blob: {}},
        {id: '4', label: 'choix 4', blob: {}},
        {id: '5', label: 'choix 5', blob: {}},
        {id: '6', label: 'choix 6', blob: {}},
    ],
    value: null,
    placeholder: 'Faites votre choix',
};
