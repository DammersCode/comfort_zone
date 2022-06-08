export interface IDashboardLayout {
  title: string;
  subtitle?: string;
  icon?: string;
  cols: number;
  rows: number;
  link?: string;
  preview?: {
    config?: any;
    component: any;
  };
}
