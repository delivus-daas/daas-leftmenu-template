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
  t: (t: string) => t,
  defaultOpenKeys: [
    "main",
    "qr",
    "home",
    "dispatch",
    "status",
    "status",
    "print",
    "address",
    "user",
  ],
  menuData: [
    {
      title: "main",
      path: "main",
      list: [{ title: "main.guide", path: "/main/guide" }],
    },
    {
      title: "qr",
      path: "qr",
      list: [
        { title: "qr.unit", path: "/qr/unit" },
        { title: "qr.hub", path: "/qr/hub" },
      ],
    },
    {
      title: "home",
      path: "home",
      list: [
        { title: "home.box", path: "/home/box" },
        { title: "home.manage", path: "/home/manage" },
      ],
    },
    {
      title: "dispatch",
      path: "dispatch",
      list: [
        {
          title: "dispatch.list",
          path: "/dispatch/list",
        },
      ],
    },
    {
      title: "status",
      path: "status",
      list: [
        {
          title: "status.order",
          path: "/status/order/",
        },
        {
          title: "status.line",
          path: "/status/line/",
        },
        {
          title: "status.shipping",
          path: "/status/shipping/",
        },
        {
          title: "status.container",
          path: "/status/container/",
        },
        {
          title: "status.rider",
          path: "/status/rider/",
        },
      ],
    },
    {
      title: "print",
      path: "print",
      list: [{ title: "print.invoice", path: "/print/invoice" }],
    },
    {
      title: "address",
      path: "address",
      list: [
        { title: "address.entry", path: "/address/entry/" },
        { title: "address.log", path: "/address/log/" },
      ],
    },
    {
      title: "user",
      path: "user",
      list: [
        { title: "user.rider", path: "/user/rider/" },
        { title: "user.seller", path: "/user/seller/" },
        { title: "user.staff", path: "/user/staff/" },
      ],
    },
  ],
};
