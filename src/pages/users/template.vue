<template>
  <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner spinner-border spinner-sm"></div>
      </div>
      <div class="col-md-3" v-for="user in users" :key="user.id">
        <CardView :user="user"/>
      </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import CardView from "../../components/users/CardView.vue";
// نکته : در vue cli عبارت @ به پوشه src اشاره میکند

const users = ref([]);
const loading = ref(true)
function getUsers() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      // handle success
      users.value = response.data;
      loading.value = false
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
