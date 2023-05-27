<template>
  <form @submit.prevent="" class="col-md-6">
    <div class="mb-3">
      <label for="exampleInputTitle1" class="form-label">title</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputTitle1"
        v-model.lazy.trim="formData.title"
      />
      <div v-if="errors.title" id="titleHelp" class="form-text text-danger">
        {{ errors.title }}
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
        {{ errors.body }}
      </div>
    </div>
    <button @click="submit" :disabled="props.loading" type="submit" class="btn btn-dark">
      <div v-if="props.loading" class="spinner-border spinner-border-sm me-2"></div>
      Edit
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
const props = defineProps(['formData', 'loading'])
const emit = defineEmits(['event'])
const formData = reactive({
  title: props.formData.title,
  body: props.formData.body
})
const errors = reactive({
  title: "",
  body: "",
});

function submit() {
  validate();
  if (errors.title == "" && errors.body == "") {
    emit('event', formData)
  }
}

function validate() {
  errors.title = "";
  errors.body = "";
  if (formData.title == "") {
    errors.title = "Title is required.";
  }
  if (formData.body == "") {
    errors.body = "Body is required.";
  }
}


</script>
