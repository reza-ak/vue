import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue"
import IndexUsers from "./pages/users/index.vue"
import ListUsers from "./pages/users/template.vue"
import ShowUser from "./pages/users/show.vue"
import IndexPosts from "./pages/posts/index.vue"
import ListPosts from "./pages/posts/template.vue"
import ShowPost from "./pages/posts/show.vue"
import CreatePost from "./pages/posts/create.vue"
import EditPost from "./pages/posts/edit.vue"

const routes = [
  {path: "/", name:"home", component: Home},
  {path: "/users", name:"users", component: IndexUsers, children: [
    {path: "", name: "userList", component: ListUsers},
    {path: ":id", name: "userID", component: ShowUser},
  ]},
  {path: "/posts", name:"posts", component: IndexPosts, children: [
    {path: "", name: "postList", component: ListPosts},
    {path: ":id", name: "postID", component: ShowPost},
    {path: "create", name: "createPost", component: CreatePost},
    {path: "edit/:id", name: "editPost", component: EditPost},
  ]},
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;