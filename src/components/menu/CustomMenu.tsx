import React from "react";
import "./menu.css";
// @ts-ignore
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import { CustomMenuProps, MenuDataType, MenuListType } from "./CustomMenu.type";

const { SubMenu } = Menu;
const CustomMenu = ({
  data,
  selectedMenu,
  t,
  defaultOpenKeys,
}: CustomMenuProps) => {
  const history = useHistory();

  const handleSelect = (menuItem: any) => {
    if (!!menuItem.key) {
      history.push(menuItem.key);
    } else {
      history.push("/home");
    }
  };

  const submenuNode = (menu: MenuListType, index?: number) => (
    <SubMenu key={menu.title} title={t(menu.title)}>
      {menu.list &&
        menu.list.map((l, index) =>
          l.list ? submenuNode(l, index) : menuNode(l, index)
        )}
    </SubMenu>
  );

  const menuNode = (menu: MenuDataType, index?: number) => {
    return (
      <Menu.Item key={menu.path}>
        <div className={"row"}>
          <span className={"flex"}>{t(menu.title)}</span>
          <span className={"medium menu-count"}>{menu.count}</span>
        </div>
      </Menu.Item>
    );
  };

  return (
    <Menu
      onClick={handleSelect}
      inlineIndent={0}
      selectedKeys={[selectedMenu]}
      style={{
        width: "var(--menu-width)",
        backgroundColor: "var(--dark)",
        position: "fixed",
        top: "var(--header-height)",
        minHeight: "100vh",
      }}
      theme={"dark"}
      mode={"inline"}
      defaultOpenKeys={defaultOpenKeys}
    >
      {data.map((l, index) =>
        l.list ? submenuNode(l, index) : menuNode(l, index)
      )}
    </Menu>
  );
};

export default CustomMenu;
