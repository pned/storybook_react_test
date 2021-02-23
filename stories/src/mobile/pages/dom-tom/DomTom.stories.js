import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import ShopList from '../data/shopList.json'

import {DomTom} from './DomTom';

export default {
    title: 'Mobile/Pages',
    component: DomTom,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphonex'
        },
    }
};

const Template = (args) => <DomTom {...args} />;

export const domTomPage = Template.bind({});
domTomPage.args = {
    shopList: ShopList,
};
domTomPage.parameters = {
    viewport: {
        defaultViewport: 'iphonex'
    }
};
