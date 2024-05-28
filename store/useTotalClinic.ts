import type { Database } from "~/types/database.types";

export const useTotalClinic = defineStore<
  string,
  {
    totalClinic: number | null;
    loading: boolean;
    error: string | null;
  },
  {},
  {
    fetchTotalClinic: () => Promise<void>;
  }
>("totalClinic", {
  state: () => ({
    totalClinic: null,
    loading: false,
    error: null,
  }),
  getters: {},
  actions: {
    async fetchTotalClinic() {
      this.loading = true;
      this.error = null;

      const client = useSupabaseClient<Database>();

      const { data, error } = await client
        .from("clinic")
        .select("*", { count: "exact" });

      if (error) {
        this.error = error.message;
        this.totalClinic = null;
      } else {
        this.totalClinic = data ? data.length : 0;
      }

      this.loading = false;
    },
  },
});
