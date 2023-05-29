<template>
  <div class="card" style="width: 18rem">
    <div v-if="route.path === '/posts'" class="card-header">
      <router-link :to="{ name: 'postID', params: { id: post.id } }">{{
        post.title
      }}</router-link>
    </div>
    <div class="card-header" v-else>
      {{ post.title }}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Body: {{ post.body }}</li>
    </ul>
    <div v-if="route.path !== '/posts'" class="card-header">
      <button :disabled="loading" @click="deletePost" class="btn btn-sm btn-danger">
        Delete
        <div v-if="loading" class="spinner-border spinner-border-sm ms-1"></div>
      </button>
      <router-link
        :to="{ name: 'editPost', params: { id: post.id } }"
        class="btn btn-sm btn-dark ms-2 text-light"
        >Edit</router-link
      >
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["post"]);

const route = useRoute();
const loading = ref(false);
function deletePost() {
  loading.value = true;
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function (response) {
      // handle success
      console.log(response);
      loading.value = false;
      Swal.fire({
        title: "Thanks!",
        text: `Post ${route.params.id} deleted succesfully`,
        icon: "warning",
        confirmButtonText: "OK",
      });
    })
    .catch(function (error) {
      // handle error
      loading.value = false;
      console.log(error);
    });
}
</script>
