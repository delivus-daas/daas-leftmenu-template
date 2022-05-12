import { MenuListType } from "../menu/CustomMenu.type";
export interface MenuTemplateProps {
    t: (text: string) => string;
    children: any;
    path?: string;
    header?: string;
    showBreadTitle?: boolean;
    menuData: MenuListType[];
    defaultOpenKeys?: string[];
}
