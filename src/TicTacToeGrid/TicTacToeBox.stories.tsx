import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BoxContent } from "../types";

import TicTacToeBox from "./TicTacToeBox";

export default {
  title: "Components/TicTacToeBox",
  component: TicTacToeBox,
  argTypes: {
    content: {
      control: "select",
      options: [BoxContent.Empty, BoxContent.X, BoxContent.O],
    },
  },
} as ComponentMeta<typeof TicTacToeBox>;

const Template: ComponentStory<typeof TicTacToeBox> = (args) => (
  <TicTacToeBox {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  content: BoxContent.Empty,
};

export const X = Template.bind({});
X.args = {
  content: BoxContent.X,
};

export const O = Template.bind({});
O.args = {
  content: BoxContent.O,
};
