<template>
  <div v-if="loading" class="d-flex justify-content-center">
    <div class="spinner spinner-border spinner-sm"></div>
  </div>
  <div v-else class="col-md-3">
    <CardView :post="post" />
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import CardView from "../../components/posts/CardView.vue";
// نکته : در vue cli عبارت @ به پوشه src اشاره میکند
import { useRoute } from "vue-router";

const post = ref([]);
const loading = ref(true);
const route = useRoute();
function getUsers() {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function (response) {
      // handle success
      post.value = response.data;
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

getUsers();
</script>
