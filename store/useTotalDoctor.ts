import type { Database } from "~/types/database.types";

export const useTotalDoctor = defineStore<
  string,
  {
    totalDoctor: number | null;
    loading: boolean;
    error: string | null;
  },
  {},
  {
    fetchTotalDoctor: () => Promise<void>;
  }
>("totalDoctor", {
  state: () => ({
    totalDoctor: null,
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchTotalDoctor() {
      this.loading = true;
      this.error = null;

      const client = useSupabaseClient<Database>();

      const { data, error } = await client
        .from("doctor")
        .select("*", { count: "exact" });

      if (error) {
        this.error = error.message;
        this.totalDoctor = null;
      } else {
        this.totalDoctor = data ? data.length : 0;
      }

      this.loading = false;
    },
  },
});
