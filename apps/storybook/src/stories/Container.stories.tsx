import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "ui/src/components/Container";

export default {
  title: "Example/Container",
  component: Container,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Container",
};
