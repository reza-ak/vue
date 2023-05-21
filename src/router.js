import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue"
import IndexUsers from "./pages/users/index.vue"

const routes = [
  {path: "/", name:"home", component: Home},
  {path: "/users", name:"users", component: IndexUsers}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;