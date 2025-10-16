import { createRouter, createWebHistory } from "vue-router"
import App from "../App.vue"

const routes = [
  {
    path: "/",
    redirect: "/fall2025",
  },
  {
    path: "/fall2025",
    name: "Fall2025",
    component: App,
  },
  {
    path: "/spring2025",
    name: "Spring2025",
    component: App,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
