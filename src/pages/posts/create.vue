<template>
  <h2>Create Post:</h2>
  <Form
    :formData="formData"
    :loading="loading"
    @event="create"
  />
</template>

<script setup>
import Form from "../../components/posts/Form.vue";
import axios from "axios";
import { reactive, ref } from "vue";
import Swal from "sweetalert2";

const formData = reactive({
  title: "",
  body: "",
});
const loading = ref(false);

function create(data) {
  loading.value = true;
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: data.title,
      body: data.body,
      userId: 1,
    })
    .then(function (response) {
      // handle success
      console.log(response.data);
      loading.value = false;
      Swal.fire({
        title: "Thanks!",
        text: "Post created succesfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    })
    .catch(function (error) {
      // handle error
      loading.value = false;
      console.log(error);
    })
}
</script>
