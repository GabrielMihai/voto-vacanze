<template>
  <div class="w-full h-full flex flex-col items-center pt-36">
    <p class="text-6xl mb-12 text-slate-600">Login</p>
    <select
      class="w-1/4 sm:w-11/12 lg:w-1/4 h-10 border-2 border-slate-600 rounded-lg mb-4 text-center"
    >
      <option selected="true" style="display: none">Selezionare un utente...</option>
      <option v-for="user in users" :key="user.name" :value="user.name">{{ user.name }}</option>
    </select>
    <button
      class="w-1/4 sm:w-11/12 lg:w-1/4 h-10 bg-slate-600 text-white rounded-lg uppercase tracking-wider text-lg font-medium"
    >
      Login
    </button>
  </div>
</template>

<script setup>
import { useUsersStore } from '../stores/UsersStore';
const { users } = useUsersStore();
</script>
