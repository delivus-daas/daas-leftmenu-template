import React, { useEffect, useState } from "react";
import "./menu.css";
// @ts-ignore
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import { CustomMenuProps, MenuDataType, MenuListType } from "./CustomMenu.type";

const { SubMenu } = Menu;
const CustomMenu = ({ data, t, defaultOpenKeys }: CustomMenuProps) => {
  const history = useHistory();
  const [currentPath, setCurrent] = useState("home");

  function setCurrentPath(location: any) {
    setCurrent(location?.pathname);
  }

  useEffect(() => {
    setCurrentPath(window.location);
    const unlisten = history.listen(setCurrentPath);
    return () => {
      unlisten();
    };
  }, []);

  const handleSelect = (menuItem: any) => {
    if (!!menuItem.key) {
      history.push(menuItem.key);
    } else {
      history.push("/home");
    }
  };

  const submenuNode = (menu: MenuListType, index?: number) => (
    <SubMenu data-cy="customMenuSelect" key={menu.title} title={t(menu.title)}>
      {menu.list &&
        menu.list.map((l, index) =>
          l.list ? submenuNode(l, index) : menuNode(l, index)
        )}
    </SubMenu>
  );

  const menuNode = (menu: MenuDataType, index?: number) => {
    return (
      <Menu.Item key={menu.path} data-cy="customMenuSelectNode">
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
      selectedKeys={[currentPath]}
      className={"menu-container"}
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
