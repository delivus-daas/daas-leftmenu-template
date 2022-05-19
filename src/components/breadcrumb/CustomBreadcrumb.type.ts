export type BreadcrumbProps = {
  t: (text: string) => string;
  leftButton?: { title: string; onClick: () => void };
};
