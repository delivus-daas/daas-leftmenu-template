import React from "react";
import { Story } from "@storybook/react";
import CustomBreadcrumb from "../components/breadcrumb";
import { BreadcrumbProps } from "../components/breadcrumb/CustomBreadcrumb.type";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "CustomBreadcrumb",
  component: CustomBreadcrumb,
};

const Template: Story<BreadcrumbProps> = (args) => (
  <MemoryRouter>
    <CustomBreadcrumb {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  t: (t: string) => t,
  rightButton: { title: "로그아웃", onClick: () => {} },
};
