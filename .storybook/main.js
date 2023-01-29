module.exports = {
    "stories": ["../src/components/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
        "@storybook/addon-docs",
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5",
    },
};
