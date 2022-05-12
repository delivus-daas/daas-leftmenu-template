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
    selectedMenu: string;
    defaultOpenKeys?: string[];
}

declare const CustomMenu: ({ data, selectedMenu, t, defaultOpenKeys, }: CustomMenuProps) => JSX.Element;

declare type BreadcrumbProps = {
    t: (text: string) => string;
    paths?: any;
};

declare const CustomBreadcrumb: ({ t, paths }: BreadcrumbProps) => JSX.Element;

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
