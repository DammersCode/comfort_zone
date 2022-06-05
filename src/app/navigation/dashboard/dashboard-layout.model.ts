export interface DashboardLayout {
  title: string;
  subtitle?: string;
  icon?: string;
  cols: number;
  rows: number;
  view?: {
    config?: any;
    component: any;
  };
}
