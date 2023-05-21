<template>
  <h1>users</h1>
</template>

<script setup>
import axios from "axios";
function getUsers() {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

getUsers()
</script>
