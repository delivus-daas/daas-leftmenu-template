import { ReactNode } from "react";
import { MenuListType } from "../menu/CustomMenu.type";
export declare type MenuTemplateProps = {
    children: ReactNode;
    path?: string;
    header?: string;
    showBreadTitle?: boolean;
    menuData: MenuListType[];
};
