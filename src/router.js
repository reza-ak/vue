import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue"
import IndexUsers from "./pages/users/index.vue"
import ListUsers from "./pages/users/template.vue"
import ShowUser from "./pages/users/show.vue"

const routes = [
  {path: "/", name:"home", component: Home},
  {path: "/users", name:"users", component: IndexUsers, children: [
    {path: "", name: "userList", component: ListUsers},
    {path: ":id", name: "userID", component: ShowUser},
  ]},
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;