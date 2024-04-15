import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "radio" },
    },
    color: {
      options: [
        "primary",
        "grey",
        "destructive",
        "success",
        "warning",
        "secondary",
      ],
      control: { type: "radio" },
    },
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    size: "sm",
    color: "primary",
    children: "click",
  },
  render: (props) => <Button {...props} />,
};
export const Disabled: Story = {
  args: {
    size: "sm",
    disabled: true,
    children: "click",
  },
  render: (props) => <Button {...props} />,
};
