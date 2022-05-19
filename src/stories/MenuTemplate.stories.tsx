import React from "react";
import { Story } from "@storybook/react";
import MenuTemplate from "../components/template";
import { MenuTemplateProps } from "../components/template/MenuTemplate.type";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "MenuTemplate",
  component: MenuTemplate,
};

const Template: Story<MenuTemplateProps> = (args) => (
  <MemoryRouter>
    <MenuTemplate {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  showBreadTitle: true,
  children: <div />,
  t: (t:string)=>t,
  menuData: [{ title: "Test menu" }],
};
