export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  beta?: boolean;
  children?: MenuItem[];
}

export interface MenuSection {
  id: string;
  title?: string;
  items: MenuItem[];
}
