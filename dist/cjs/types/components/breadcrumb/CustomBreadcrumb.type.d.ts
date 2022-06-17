export declare type BreadcrumbProps = {
    t: (text: string) => string;
    rightButton?: BreadCrumbButtonType;
    paths?: string[];
    onClickLink?: (path: string) => void;
};
export declare type BreadCrumbButtonType = {
    title: string;
    onClick: () => void;
};
