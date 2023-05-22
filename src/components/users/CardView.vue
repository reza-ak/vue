<template>
  <div class="card" style="width: 18rem">
    <div v-if="route.path === '/users'" class="card-header">
      <router-link :to="{name: 'userID', params: {id: user.id}}">{{user.name}}</router-link>
    </div>
    <div class="card-header" v-else>
      {{ user.name }}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: {{ user.username }}</li>
      <li class="list-group-item">Email: {{ user.email }}</li>
      <li class="list-group-item">Phone: {{ user.phone }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

  const props = defineProps(['user'])

  const route = useRoute();
</script>
