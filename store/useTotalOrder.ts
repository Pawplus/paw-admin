import type { Database } from "~/types/database.types";

export const useTotalOrder = defineStore<
  string,
  {
    totalFinishedOrders: number | null;
    loading: boolean;
    error: string | null;
  },
  {},
  {
    fetchTotalFinishedOrders: () => Promise<void>;
  }
>("totalOrder", {
  state: () => ({
    totalFinishedOrders: null,
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchTotalFinishedOrders() {
      this.loading = true;
      this.error = null;

      const client = useSupabaseClient<Database>();

      const { data, error } = await client
        .from("transaction")
        .select("*", { count: "exact" })
        .eq("payment_status", "finished"); // Assuming 'finished' is the status for completed orders

      if (error) {
        this.error = error.message;
        this.totalFinishedOrders = null;
      } else {
        this.totalFinishedOrders = data ? data.length : 0;
      }

      this.loading = false;
    },
  },
});
