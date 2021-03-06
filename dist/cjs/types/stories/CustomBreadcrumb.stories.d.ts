/// <reference types="react" />
import { Story } from "@storybook/react";
import { BreadcrumbProps } from "../components/breadcrumb/CustomBreadcrumb.type";
declare const _default: {
    title: string;
    component: ({ t, rightButton, paths: pathsProp, onClickLink, }: BreadcrumbProps) => JSX.Element;
};
export default _default;
export declare const Primary: Story<BreadcrumbProps>;
