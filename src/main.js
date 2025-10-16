import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"

const app = createApp(App)
app.use(router)
app.mount("#app")

// Handle initial route
const path = window.location.pathname;
if (path === "/" || !["/fall2025", "/spring2025"].includes(path)) {
  window.history.replaceState({}, "", "/fall2025");
}
