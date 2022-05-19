export declare type BreadcrumbProps = {
    t: (text: string) => string;
    rightButton?: BreadCrumbButtonType;
};
export declare type BreadCrumbButtonType = {
    title: string;
    onClick: () => void;
};
