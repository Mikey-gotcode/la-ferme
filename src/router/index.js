import { createWebHistory, createRouter } from "vue-router";
import EventDetails from "../views/home/EventDetails.vue"



const routes = [
{ 
    path: '/', 
    name: 'Home', 
    component: () => import('../views/home/MainHome.vue') // Or wherever your home is
  },
  { path: '/event/:id', name: 'EventDetails', component: EventDetails },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router