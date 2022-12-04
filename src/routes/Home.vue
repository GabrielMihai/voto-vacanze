<template>
  <div class="w-full h-full flex justify-center p-10">
    <div class="w-full h-full flex flex-col">
      <div class="h-1/6 flex border-b-2 border-b-black bg-slate-800 text-white">
        <div
          class="w-1/8 border-r-2 border-r-black flex justify-center items-center uppercase tracking-wider text-lg"
        >
          Nome
        </div>
        <div
          class="w-1/8 border-r-2 border-r-black flex justify-center items-center uppercase tracking-wider text-lg"
        >
          Destinazione
        </div>
        <div
          class="w-1/8 border-r-2 border-r-black flex justify-center items-center uppercase tracking-wider text-lg"
        >
          Luogo
        </div>
        <div
          class="w-1/8 border-r-2 border-r-black flex justify-center items-center uppercase tracking-wider text-lg"
        >
          Cibo
        </div>
        <div
          class="w-1/8 border-r-2 border-r-black flex justify-center items-center uppercase tracking-wider text-lg"
        >
          Prezzo
        </div>
        <div
          class="w-1/8 border-r-2 border-r-black flex justify-center items-center uppercase tracking-wider text-lg"
        >
          Divertimento
        </div>
        <div
          class="w-1/8 border-r-2 border-r-black flex justify-center items-center uppercase tracking-wider text-lg"
        >
          Comodità
        </div>
        <div
          class="w-1/8 border-r-2 border-r-black flex justify-center items-center uppercase tracking-wider text-lg"
        >
          Totale
        </div>
      </div>
      <user-row v-for="user in usersToBeVoted" :key="user.name" :user="user"></user-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUsersStore } from '../stores/UsersStore';
import UserRow from '../components/UserRow.vue';

const { selectedUser, users } = useUsersStore();

const filteredUsers = users.filter((user) => user.name !== selectedUser.name);

filteredUsers.forEach((user) => {
  user.place = undefined;
  user.food = undefined;
  user.price = undefined;
  user.fun = undefined;
  user.comodity = undefined;
  user.total = 0;
});

const usersToBeVoted = ref(filteredUsers);
</script>
