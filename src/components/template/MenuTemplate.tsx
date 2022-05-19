import React, { useEffect } from "react";
import "./template.css";
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
  // // const [currentPath, setCurrent] = useState("home");
  // function setCurrentPath(location: any) {
  //   setCurrent(location?.pathname);
  // }

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);

  return (
    <div className={"container"}>
      <div className={"menu-header"}>{header}</div>
      <CustomMenu data={menuData} t={t} defaultOpenKeys={defaultOpenKeys} />
      <div className={"menu-temp-content"}>
        {showBreadTitle && <CustomBreadcrumb t={t} />}
        <div className={"menu-child"}>{children}</div>
      </div>
    </div>
  );
};

export default MenuTemplate;
