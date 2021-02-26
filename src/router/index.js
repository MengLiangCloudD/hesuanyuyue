import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: resolve=>(require(["@/components/index"],resolve)),
  },
  {
    path: "/index1",
    name: "index1",
    component: resolve=>(require(["@/components/index1"],resolve)),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
