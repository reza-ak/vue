<template>
  <div>
    <router-link class="btn btn-success" :to="{ name: 'createPost' }">
      Create New Post
    </router-link>
  </div>
  <div v-if="loading" class="d-flex justify-content-center">
    <div class="spinner spinner-border spinner-sm"></div>
  </div>
  <div class="col-md-3" v-for="post in posts" :key="post.id">
    <CardView :post="post" />
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import CardView from "../../components/posts/CardView.vue";
// نکته : در vue cli عبارت @ به پوشه src اشاره میکند

const posts = ref([]);
const loading = ref(true);
function getposts() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      // handle success
      posts.value = response.data;
      loading.value = false;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

getposts();
</script>
