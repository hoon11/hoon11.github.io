import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import Footer from "@/src/components/Footer";

export default {
  title: "Example/Footer",
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Footer>;

const Template: Story<typeof Footer> = (args) => <Footer {...args} />;

export const LoggedIn = Template.bind({
  user: {
    name: "渡辺 結菜",
  },
});

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
