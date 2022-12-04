<template>
  <div class="w-full h-full flex flex-col items-center pt-36">
    <p class="text-6xl mb-12 text-slate-600">Login</p>
    <select
      class="w-1/4 sm:w-11/12 lg:w-1/4 h-10 border-2 border-slate-600 rounded-lg mb-4 text-center cursor-pointer"
      v-model="selectedUser"
    >
      <option selected="true" style="display: none" value="">Selezionare un utente...</option>
      <option v-for="user in users" :key="user.name" :value="user">{{ user.name }}</option>
    </select>
    <button
      :class="`w-1/4 sm:w-11/12 lg:w-1/4 h-10 ${
        selectedUser ? 'bg-slate-600 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'
      } text-white rounded-lg uppercase tracking-wider text-lg font-medium`"
      @click="setSelectedUserHandler"
    >
      Login
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUsersStore } from '../stores/UsersStore';
const { users, setSelectedUser } = useUsersStore();

const router = useRouter();

const selectedUser = ref('');

const setSelectedUserHandler = () => {
  setSelectedUser(selectedUser);
  router.push({ path: '/' });
};
</script>
