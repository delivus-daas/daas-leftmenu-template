export type BreadcrumbProps = {
  t: (text: string) => string;
  rightButton?: BreadCrumbButtonType;
};

export type BreadCrumbButtonType = { title: string; onClick: () => void };
