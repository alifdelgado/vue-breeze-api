import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getUser() {
      await this.getToken();
      const { data } = await axios.get("/api/user");
      this.authUser = data;
    },
    async handleLogin(data) {
      await this.getToken();
      await axios.post("/login", data);
      this.router.push({ name: "home" });
    },
    async handleRegister(data) {
      await this.getToken();
      await axios.post("/register", data);
      this.router.push({ name: "home" });
    },
    async handleLogout() {
      await axios.post("/logout");
      this.authUser = null;
      this.router.push({ name: "login" });
    },
    async handleForgotPassword(email) {
      this.getToken();
      await axios.post("/forgot-password", { email });
      this.router.push({ name: "reset-password" });
    },
    async handleResetPassword(data) {
      await axios.post("/reset-password", data);
      this.router.push({ name: "login" });
    },
  },
});
