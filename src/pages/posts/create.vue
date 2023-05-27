<template>
  <h2>Create Post:</h2>
  <form @submit.prevent="create" class="col-md-6">
    <div class="mb-3">
      <label for="exampleInputTitle1" class="form-label">title</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputTitle1"
        v-model.lazy.trim="formData.title"
      />
      <div v-if="errors.title" id="titleHelp" class="form-text text-danger">
        {{errors.title}}
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputBody1" class="form-label">Body</label>
      <textarea
      class="form-control"
      name="body"
      id="exampleInputBody1"
      cols="30"
      rows="5"
      v-model.lazy.trim="formData.body"
      ></textarea>
      <div v-if="errors.body" id="titleHelp" class="form-text text-danger">
        {{errors.body}}
      </div>
    </div>
    <button :disabled="loading" type="submit" class="btn btn-dark">
      <div v-if="loading" class="spinner-border spinner-border-sm me-2"></div>  
      Submit
    </button>
  </form>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import Swal from 'sweetalert2'

const formData = reactive({
  title: "",
  body: ""
});
const errors = reactive({
  title: "",
  body: ""
});
const loading = ref(false)

function validate(){
  errors.title = ""
  errors.body = ""
  if(formData.title == ""){
    errors.title = "Title is required."
  }
  if(formData.body == ""){
    errors.body = "Body is required."
  }
}
function create() {
  loading.value = true
  validate()
  if(errors.title != "" || errors.body != ""){
    loading.value = false
    return false
  }else{
    axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: formData.title,
      body: formData.body,
      userId: 1
    })
    .then(function (response) {
      // handle success
      console.log(response.data);
      loading.value = false;
      Swal.fire({
      title: 'Thanks!',
      text: 'Post created succesfully',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    })
    .catch(function (error) {
      // handle error
      loading.value = false;
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
}
</script>
