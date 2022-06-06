export interface IDashboardLayout {
  title: string;
  subtitle?: string;
  icon?: string;
  cols: number;
  rows: number;
  link?: string;
  view?: {
    config?: any;
    component: any;
  };
}
