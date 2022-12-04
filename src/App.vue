<template>
  <div class="h-screen w-screen m-0 p-0 box-border">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import { useUsersStore } from './stores/UsersStore';
const { selectedUser } = useUsersStore();

const router = useRouter();

if (!selectedUser) {
  router.push({
    path: '/login',
  });
}
</script>

<style scoped></style>
