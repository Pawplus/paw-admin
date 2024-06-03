import type { Database } from "~/types/database.types";

export const useConsulClinic = defineStore("consulClinic", {
  state: () => ({
    totalConsultations: 0,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchTotalConsultations() {
      this.loading = true;
      this.error = null;

      const client = useSupabaseClient<Database>();

      const { data, error } = await client
        .from("transaction")
        .select("*", { count: "exact" });

      if (error) {
        this.error = error.message;
        this.totalConsultations = 0;
      } else {
        this.totalConsultations = data ? data.length : 0;
      }

      this.loading = false;
    },
  },
});
