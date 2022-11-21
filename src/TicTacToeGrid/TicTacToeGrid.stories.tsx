import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BoxContent } from "../types";

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
    [BoxContent.X, BoxContent.Empty, BoxContent.X],
    [BoxContent.O, BoxContent.X, BoxContent.Empty],
    [BoxContent.Empty, BoxContent.O, BoxContent.O],
  ],
};

export const Empty3x3 = Template.bind({});
Empty3x3.args = {
  gridData: [
    [BoxContent.Empty, BoxContent.Empty, BoxContent.Empty],
    [BoxContent.Empty, BoxContent.Empty, BoxContent.Empty],
    [BoxContent.Empty, BoxContent.Empty, BoxContent.Empty],
  ],
};

export const X3x3 = Template.bind({});
X3x3.args = {
  gridData: [
    [BoxContent.X, BoxContent.X, BoxContent.X],
    [BoxContent.X, BoxContent.X, BoxContent.X],
    [BoxContent.X, BoxContent.X, BoxContent.X],
  ],
};

export const O3x3 = Template.bind({});
O3x3.args = {
  gridData: [
    [BoxContent.O, BoxContent.O, BoxContent.O],
    [BoxContent.O, BoxContent.O, BoxContent.O],
    [BoxContent.O, BoxContent.O, BoxContent.O],
  ],
};
