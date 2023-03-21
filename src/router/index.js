import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import FormView from "@/views/FormView.vue";
import TableView from "@/views/TableView.vue";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/form',
    name:'form',
    component: FormView
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
