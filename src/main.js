import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import NotFound from "./views/NotFound.vue";

import "./scss/main.scss";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
});

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
