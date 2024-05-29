import type { Database } from "~/types/database.types";

export const useTotalActiveOrder = defineStore<
  string,
  {
    totalActiveOrders: number | null;
    loading: boolean;
    error: string | null;
  },
  {},
  {
    fetchTotalActiveOrders: () => Promise<void>;
  }
>("totalActiveOrder", {
  state: () => ({
    totalActiveOrders: null,
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchTotalActiveOrders() {
      this.loading = true;
      this.error = null;

      const client = useSupabaseClient<Database>();

      const { data, error } = await client
        .from("transaction")
        .select("*", { count: "exact" })
        .eq("payment_status", "active"); // Assuming 'active' is the status for active orders

      if (error) {
        this.error = error.message;
        this.totalActiveOrders = null;
      } else {
        this.totalActiveOrders = data ? data.length : 0;
      }

      this.loading = false;
    },
  },
});
