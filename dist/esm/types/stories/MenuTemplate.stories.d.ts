/// <reference types="react" />
import { Story } from "@storybook/react";
import { MenuTemplateProps } from "../components/template/MenuTemplate.type";
declare const _default: {
    title: string;
    component: ({ children, showBreadTitle, menuData, header, defaultOpenKeys, t, }: MenuTemplateProps) => JSX.Element;
};
export default _default;
export declare const Primary: Story<MenuTemplateProps>;
