import React, { useEffect, useState } from "react";
import "./menu.style.css";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
var SubMenu = Menu.SubMenu;
var CustomMenu = function (_a) {
    var data = _a.data;
    var history = useHistory();
    var _b = useState("home"), current = _b[0], setCurrent = _b[1];
    useEffect(function () {
        if (window.location) {
            setCurrent(window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1));
        }
        var unlisten = history.listen(function (location) {
            var path = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
            setCurrent(path);
        });
        return function cleanup() {
            unlisten();
        };
    }, []);
    var handleSelect = function (menuItem) {
        var _a;
        var path = "";
        if (((_a = menuItem.keyPath) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            menuItem.keyPath.reverse().map(function (p) {
                path += "/" + p;
            });
            history.push(path);
        }
        else {
            history.push("/home");
        }
    };
    var submenuNode = function (menu, index) { return (React.createElement(SubMenu, { key: menu.title, title: menu.title }, menu.list &&
        menu.list.map(function (l, index) {
            return l.list ? submenuNode(l, index) : menuNode(l, index);
        }))); };
    var menuNode = function (menu, index) {
        return (React.createElement(Menu.Item, { key: menu.title },
            React.createElement("div", { className: "row" },
                React.createElement("span", { className: "flex" }, menu.title),
                React.createElement("span", { className: "medium menu-count" }, menu.count))));
    };
    return (React.createElement(Menu, { onClick: handleSelect, inlineIndent: 0, selectedKeys: [current], style: {
            width: "var(--menu-width)",
            backgroundColor: "var(--dark)",
            position: "fixed",
            top: "var(--header-height)",
            minHeight: "100vh",
        }, defaultSelectedKeys: ["all"], theme: "dark", defaultOpenKeys: ["shipping"], mode: "inline" }, data.map(function (l, index) {
        return l.list ? submenuNode(l, index) : menuNode(l, index);
    })));
};
export default CustomMenu;
//# sourceMappingURL=CustomMenu.js.map