import type { Database } from "~/types/database.types";

export const useOnlineConsultations = defineStore({
  id: "onlineConsultations",
  state: () => ({
    totalOnlineConsultations: 0,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchTotalOnlineConsultations() {
      this.loading = true;
      this.error = null;

      const client = useSupabaseClient<Database>();

      const { data, error } = await client
        .from("transaction")
        .select("id", { count: "exact" })
        .eq("type", "online");

      if (error) {
        this.error = error.message;
      } else {
        this.totalOnlineConsultations = data?.length || 0;
      }

      this.loading = false;
    },
  },
});
