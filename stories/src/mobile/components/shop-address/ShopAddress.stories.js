import React from 'react';

import {ShopAddress} from './index';
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";

export default {
    title: 'Mobile/Components',
    component: ShopAddress,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphonex'
        },
    }
};

const Template = (args) => <ShopAddress {...args} />;

export const shopAddress = Template.bind({});

shopAddress.parameters = {
    viewport: {
        defaultViewport: 'iphonex'
    }
};
shopAddress.args = {
    shopInfos: {
        shopInfos: {
            id: "001",
            name: "But Nice",
            address: {
                streetAddress: "106 avenue France d'Outre Mer",
                zipCode: "06700",
                city: "ST LAURENT DU VAR",
                "country": "FR"
            },
        }
    }
};
