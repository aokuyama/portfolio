import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SectionTitle } from "ui/src/components/SectionTitle";

export default {
  title: "Example/SectionTitle",
  component: SectionTitle,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = (args) => (
  <SectionTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Title",
};
