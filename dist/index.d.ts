/// <reference types="react" />
declare type MenuDataType = {
    title: string;
    path?: string;
    count?: number;
};
interface MenuListType extends MenuDataType {
    list?: MenuListType[];
}
interface CustomMenuProps {
    t: (text: string) => string;
    data: MenuListType[];
    defaultOpenKeys?: string[];
}

declare const CustomMenu: ({ data, t, defaultOpenKeys }: CustomMenuProps) => JSX.Element;

declare type BreadcrumbProps = {
    t: (text: string) => string;
    rightButton?: BreadCrumbButtonType;
    paths?: string[];
    onClickLink?: (path: string) => void;
};
declare type BreadCrumbButtonType = {
    title: string;
    onClick: () => void;
};

declare const CustomBreadcrumb: ({ t, rightButton, paths: pathsProp, onClickLink, }: BreadcrumbProps) => JSX.Element;

interface MenuTemplateProps {
    t: (text: string) => string;
    children: any;
    path?: string;
    header?: string;
    showBreadTitle?: boolean;
    menuData: MenuListType[];
    defaultOpenKeys?: string[];
}

declare const MenuTemplate: ({ children, showBreadTitle, menuData, header, defaultOpenKeys, t, }: MenuTemplateProps) => JSX.Element;

export { CustomBreadcrumb, CustomMenu, MenuTemplate };
