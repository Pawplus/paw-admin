import { defineStore } from "pinia";
import type { Database } from "../types/database.types";

export const useAuth = defineStore<
  string,
  {
    email: string;
    password: string;
  },
  {},
  {
    signInWithEmail: () => Promise<boolean>;
  }
>("auth", {
  state: () => ({
    email: "",
    password: "",
  }),
  getters: {},
  actions: {
    async signInWithEmail(): Promise<boolean> {
      const client = useSupabaseClient<Database>();

      const { error } = await client.auth.signInWithPassword({
        email: this.email,
        password: this.password,
      });

      if (error) {
        console.error("Sign-in error:", error.message);
        return false;
      }
      return true;
    },
  },
});
