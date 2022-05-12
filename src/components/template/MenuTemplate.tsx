import React, { useEffect, useMemo, useState } from "react";
import "./menu.style.css";
import CustomMenu from "../menu/CustomMenu";
import CustomBreadcrumb from "../breadcrumb/CustomBreadcrumb";
import { MenuTemplateProps } from "./MenuTemplate.type";
import { useHistory } from "react-router-dom";

const MenuTemplate = ({
  children,
  showBreadTitle = true,
  menuData,
  header,
  defaultOpenKeys,
  t,
}: MenuTemplateProps) => {
  const history = useHistory();
  const [currentPath, setCurrent] = useState("home");
  function setCurrentPath(location: any) {
    setCurrent(location?.pathname);
  }

  const breadPaths = useMemo(() => {
    const breadPaths = [];
    let paths = currentPath.split("/").filter((p) => p.length > 0);
    for (let i = 0; i < paths.length; i++) {
      let path = paths[i];
      for (let j = 0; j < i; j++) {
        path = paths[j] + "." + path;
      }
      breadPaths.push(path);
    }
    return breadPaths;
  }, [currentPath]);

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    setCurrentPath(window.location);
    const unlisten = history.listen(setCurrentPath);
    window.addEventListener("resize", appHeight);
    appHeight();
    return () => {
      window.removeEventListener("resize", appHeight);
      unlisten();
    };
  }, []);

  return (
    <div className={"container"}>
      <div className={"menu-header"}>{header}</div>
      <CustomMenu
        data={menuData}
        selectedMenu={currentPath}
        t={t}
        defaultOpenKeys={defaultOpenKeys}
      />
      <div className={"menu-temp-content"}>
        {showBreadTitle && <CustomBreadcrumb paths={breadPaths} t={t} />}
        <div className={"menu-child"}>{children}</div>
      </div>
    </div>
  );
};

export default MenuTemplate;
