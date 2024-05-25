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
    async fetchTotalClinic(): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        const client = useSupabaseClient<Database>();
        const { data, error } = await client
          .from("clinic")
          .select("*", { count: "exact" });

        if (error) {
          throw error;
        }

        this.totalClinic = data ? data.length : 0;
      } catch (err) {
        if (err instanceof Error) {
          this.error = err.message;
        } else {
          this.error = "Wow, unexpected error occurred";
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
