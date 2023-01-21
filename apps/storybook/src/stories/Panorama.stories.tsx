import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Panorama } from "ui/src/components/Panorama";

export default {
  title: "Example/Panorama",
  component: Panorama,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Panorama>;

const Template: ComponentStory<typeof Panorama> = (args) => (
  <Panorama {...args} />
);

export const Default = Template.bind({});
Default.args = {
  vision: `Vision`,
  catchphrase: "phrase",
};
