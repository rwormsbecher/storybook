import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Inputs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Input",
    component: Input,
    argTypes: {
        levels: { control: "select" },
        onBlur: { action: "blur" },
        onClick: { action: "click" },
    },
} as ComponentMeta<typeof Input>;

export const MyInput = (args: any) => <Input {...args} color="#440044" />;
