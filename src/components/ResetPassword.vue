<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "../stores/auth";

const route = useRoute();
const form = ref({
  token: route.params.token,
  email: route.query.email,
  password: "",
  password_confirmation: "",
});
const authStore = useAuthStore();

const handleSubmit = async () => {
  await authStore.handleResetPassword(form.value);
};
</script>
<template>
  <div
    class="w-full max-w-sm p-6 m-auto mx-auto mt-10 bg-slate-200 rounded shadow"
  >
    <div class="flex justify-center mx-auto">
      <img class="w-auto h-7 sm:h-8" src="/vite.svg" alt="Vite logo" />
    </div>

    <form class="mt-6" @submit.prevent="handleSubmit">
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <label
            for="password"
            class="block text-sm text-gray-800 dark:text-gray-200"
            >Password</label
          >
        </div>
        <input
          type="password"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          v-model="form.password"
        />
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-between">
          <label
            for="password_confirmation"
            class="block text-sm text-gray-800 dark:text-gray-200"
            >Reset Password</label
          >
        </div>
        <input
          type="password"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          v-model="form.password_confirmation"
        />
      </div>

      <div class="mt-6">
        <button
          class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
        >
          Reset password
        </button>
      </div>
    </form>
  </div>
</template>
