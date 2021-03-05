import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store"

const util = require('util');

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'LoginPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
  {
    path: '/Register',
    name: 'RegisterPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/RegisterPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  let user = null;
  const authenticatedPages = ["Home"];
  // local storage üzerinde user varmı?
  if (localStorage?.user) user = JSON.stringify(localStorage?.user)



  // localstorage üzerinde user varsa store u güncelle
  if (user !== null && typeof user === 'object') {
    store.commit("users/setUser", user)
  };
  // is isAuthenticated bilgisini store üzerinden almak
  const isAuthenticated = store.getters["users/isAuthenticated"]


  // rules...
  //eğer giriş yapmamışsa ve user ile ilgili bölümlere sokma login sayfasına yönlendir
  if (!isAuthenticated && authenticatedPages.indexOf(to.name) > -1) next({
    name: "LoginPage"
  });
  if (isAuthenticated && (to.name === "LoginPage" || to.name === "RegisterPage"))
    next({
      name: "Home"
    });

  next();
})
export default router