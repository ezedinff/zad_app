/* --- STATE --- */
export interface DashboardState {
  reports?: {
    boards: { label: string; value: number }[];
    tops: { label: string; value: number }[];
    sales: { label: string; value: number }[];
  };
  loading: boolean;
}
