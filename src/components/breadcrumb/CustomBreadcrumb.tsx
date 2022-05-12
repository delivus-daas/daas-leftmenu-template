// @ts-ignore
import { Breadcrumb } from "antd";
import React from "react";
import "./breadcrumb.css";
import { BreadcrumbProps } from "./CustomBreadcrumb.type";

const CustomBreadcrumb = ({ t, paths }: BreadcrumbProps) => (
  <Breadcrumb separator=">">
    {paths &&
      paths.map((path: string, index: number) => (
        <Breadcrumb.Item key={"breaditem" + index}>{t(path)}</Breadcrumb.Item>
      ))}
  </Breadcrumb>
);

export default CustomBreadcrumb;
