import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';

const BASE_URL = '/react-questionnaire';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    staticDirs: ['..\\public'],
    webpackFinal(config, options) {
        if (!config.resolve) config.resolve = {};
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'),
        };

        // if (!config.output) config.output = {};
        // // config.output.publicPath = BASE_URL + '/storybook-static';

        return config;
    },
};
export default config;
