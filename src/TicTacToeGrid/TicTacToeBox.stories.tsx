import { ComponentStory, ComponentMeta } from "@storybook/react";

import TicTacToeBox from "./TicTacToeBox";

export default {
  title: "Components/TicTacToeBox",
  component: TicTacToeBox,
  argTypes: {},
} as ComponentMeta<typeof TicTacToeBox>;

const Template: ComponentStory<typeof TicTacToeBox> = (args) => (
  <TicTacToeBox {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  content: 0,
};

export const X = Template.bind({});
X.args = {
  content: 1,
};

export const O = Template.bind({});
O.args = {
  content: 2,
};
