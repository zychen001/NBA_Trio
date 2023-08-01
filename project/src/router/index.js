import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/home.vue'
import Detail from '../views/pages/detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/pages/about.vue')
  // },
  {
    path: '/detail',
    name: Detail,
    component: Detail
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return { el: to.hash, behavior: "smooth" };
      } else {
        console.log("moving to top of the page");
        window.scrollTo(0, 0);
      }
   }
})
export default router