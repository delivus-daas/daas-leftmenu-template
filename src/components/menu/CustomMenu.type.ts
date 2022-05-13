export type MenuDataType = {
  title: string;
  path?: string;
  count?: number;
};

export interface MenuListType extends MenuDataType {
  list?: MenuListType[];
}

export interface CustomMenuProps {
  t: (text: string) => string;
  data: MenuListType[];
  defaultOpenKeys?: string[];
}
