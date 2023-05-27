<template>
  <h2>Edit Post:</h2>
  <div
    v-if="pageLoading"
    class="row d-flex justify-content-center align-items-center my-5"
  >
    <div class="spinner-border text-center col-12"></div>
  </div>
  <div v-else>
    <Form
      :formData="formData"
      :loading="loading"
      @event="updatePost"
    />
  </div>
</template>

<script setup>
import Form from "../../components/posts/Form.vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { reactive, ref } from "vue";
import Swal from "sweetalert2";

const loading = ref(false);
const route = useRoute();
const formData = reactive({});
const pageLoading = ref(true);
function getPost() {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function (response) {
      // handle success
      formData.title = response.data.title;
      formData.body = response.data.body;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      pageLoading.value = false;
    });
}

function updatePost(data) {
  loading.value = true;
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
      id: route.params.id,
      title: data.title,
      body: data.body,
      userId: 1,
    })
    .then(function (response) {
      // handle success
      console.log("response", response.data);
      loading.value = false;
      Swal.fire({
        title: "Thanks!",
        text: "Post updated succesfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    })
    .catch(function (error) {
      // handle error
      loading.value = false;
      console.log(error);
    });
}

getPost();
</script>
