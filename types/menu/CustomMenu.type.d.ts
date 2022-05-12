export declare type MenuDataType = {
    title: string;
    path: string;
};
export interface MenuListType extends MenuDataType {
    list?: MenuDataType[];
}
export declare type CustomMenuProps = {
    data: MenuListType[];
};
