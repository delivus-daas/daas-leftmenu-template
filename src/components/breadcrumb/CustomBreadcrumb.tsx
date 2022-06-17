// @ts-ignore
import { Breadcrumb, Button } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import "./breadcrumb.css";
import { BreadcrumbProps } from "./CustomBreadcrumb.type";
import { useHistory } from "react-router-dom";

const CustomBreadcrumb = ({
  t,
  rightButton,
  paths: pathsProp,
  onClickLink,
}: BreadcrumbProps) => {
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

  const paths = useMemo(() => {
    let breadPaths = [];
    if (!!pathsProp) {
      breadPaths = pathsProp;
    } else {
      let paths = currentPath.split("/").filter((p) => p.length > 0);
      for (let i = 0; i < paths.length; i++) {
        let path = paths[i];
        for (let j = 0; j < i; j++) {
          path = paths[j] + "." + path;
        }
        breadPaths.push(path);
      }
    }
    return breadPaths;
  }, [currentPath, pathsProp]);

  function handleClick(path: string) {
    return function () {
      !!onClickLink && onClickLink(path);
    };
  }

  return (
    <div className={"breadcrumb-container"}>
      <Breadcrumb separator=">">
        {paths &&
          paths.map((path: string, index: number) => (
            <Breadcrumb.Item
              data-cy="customBreadCrumbItem"
              key={"breaditem" + index}
              className={onClickLink ? "link" : ""}
              onClick={onClickLink ? handleClick(path) : undefined}
            >
              {t(path)}
            </Breadcrumb.Item>
          ))}
      </Breadcrumb>
      {!!rightButton && (
        <Button
          type={"text"}
          className={"body primary breadcrumb-btn-left"}
          onClick={rightButton?.onClick}
        >
          {rightButton?.title}
        </Button>
      )}
    </div>
  );
};

export default CustomBreadcrumb;
