import { ComponentStory, ComponentMeta } from "@storybook/react";

import TicTacToeGrid from "./TicTacToeGrid";

export default {
  title: "Components/TicTacToeGrid",
  component: TicTacToeGrid,
  argTypes: {
    gridData: {},
  },
} as ComponentMeta<typeof TicTacToeGrid>;

const Template: ComponentStory<typeof TicTacToeGrid> = (args) => (
  <TicTacToeGrid {...args} />
);

export const Mixed3x3 = Template.bind({});
Mixed3x3.args = {
  gridData: [
    [1, 0, 1],
    [2, 1, 0],
    [0, 2, 2],
  ],
};

export const Empty3x3 = Template.bind({});
Empty3x3.args = {
  gridData: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
};

export const X3x3 = Template.bind({});
X3x3.args = {
  gridData: [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
};

export const O3x3 = Template.bind({});
O3x3.args = {
  gridData: [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
};
