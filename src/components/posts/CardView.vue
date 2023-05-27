<template>
  <div class="card" style="width: 18rem">
    <div v-if="route.path === '/posts'" class="card-header">
      <router-link :to="{name: 'postID', params: {id: post.id}}">{{post.title}}</router-link>
    </div>
    <div class="card-header" v-else>
      {{ post.title }}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Body: {{ post.body }}</li>
    </ul>
    <div v-if="route.path !== '/posts'" class="card-header">
      <button class="btn btn-sm btn-danger">Delete</button>
      <router-link :to="{name: 'editPost', params: {id: post.id}}" class="btn btn-sm btn-dark ms-2 text-light">Edit</router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

  const props = defineProps(['post'])

  const route = useRoute();
</script>
