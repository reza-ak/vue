<template>
  <div class="card" style="width: 18rem">
    <div class="card-header">{{user.name}}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: {{ user.username }}</li>
      <li class="list-group-item">Email: {{ user.email }}</li>
      <li class="list-group-item">Phone: {{ user.phone }}</li>
    </ul>
  </div>
</template>

<script setup>
  const props = defineProps(['user'])
</script>
