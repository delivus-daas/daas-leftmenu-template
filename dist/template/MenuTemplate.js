import React from "react";
import "./menu.style.css";
import CustomMenu from "../menu/CustomMenu";
import CustomBreadcrumb from "../breadcrumb/CustomBreadcrumb";
var MenuTemplate = function (_a) {
    var children = _a.children, _b = _a.showBreadTitle, showBreadTitle = _b === void 0 ? true : _b, menuData = _a.menuData, header = _a.header;
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "menu-header body1 bold" }, header),
        React.createElement(CustomMenu, { data: menuData }),
        React.createElement("div", { className: "menu-temp-content" },
            showBreadTitle && React.createElement(CustomBreadcrumb, null),
            React.createElement("div", { className: "menu-child" }, children))));
};
export default MenuTemplate;
//# sourceMappingURL=MenuTemplate.js.map