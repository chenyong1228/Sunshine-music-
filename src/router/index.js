import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import list from '../views/list.vue'
import there from '../views/there.vue'
import add  from '../views/add.vue'
import Search from '../views/Search.vue'
import Menu from '../views/Menu.vue'
import player from '../views/player.vue'
import Singer from '../views/Singer.vue'
import Detail from '../views/Detail.vue'
import player_Two from '../views/player_Two.vue'
import head from '../components/head.vue'


import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



Vue.use(VueRouter)

const routes = [
  {
        path: '/head',
        component: head
      },
    {
      path: '/player_Two',
      name: 'player_Two',
      component: player_Two
      },
  {
        path: '/detail',
        component: Detail
      },
      {
        path: '/singer',
        component: Singer
      },
   {
        path: '/player',
        name: 'player',
        component: player
      },
   {
        path:'/menu',
        component:Menu
      },
      {
        path:'/search',
        component:Search
      },
  {
    path:'/add',
    component:add
  },
  {
    path:'/there',
    component:there
  },
  {
path:'/list/:id',
component:list
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
