import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
var CustomBreadcrumb = function () {
    var _a = useState(), paths = _a[0], setPaths = _a[1];
    useEffect(function () {
        setPaths(location.pathname.split("/"));
    }, [location]);
    return (React.createElement(Breadcrumb, { separator: ">" }, paths &&
        paths.map(function (path, index) { return (React.createElement(Breadcrumb.Item, { key: "breaditem" + index }, path)); })));
};
export default CustomBreadcrumb;
//# sourceMappingURL=CustomBreadcrumb.js.map