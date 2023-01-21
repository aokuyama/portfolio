import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Section } from "ui/src/components/Section";

export default {
  title: "Example/Section",
  component: Section,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Section",
};
