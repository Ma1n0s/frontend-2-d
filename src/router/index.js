import AddComment from '@/views/AddComment.vue';
import Contacts from '@/views/Contacts.vue';
import Login from '@/views/Login.vue';
import Logout from '@/views/Logout.vue';
import Main from '@/views/Main.vue';
import MainForm from '@/views/MainForm.vue';
import Policy from '@/views/Policy.vue';
import Register from '@/views/Register.vue';
import RegisterComp from '@/views/RegisterComp.vue';
import RuleRev from '@/views/RuleRev.vue';
import SiteRule from '@/views/SiteRule.vue';
import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //     path: '/menu',
    //     name: 'menu',
    // },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/logout',
      component: Logout
    },
    {
      path: '/MainForm',
      component: MainForm
    },
    {
      path: '/RegisterComp',
      component: RegisterComp
    },
    {
      path: '/SiteRule',
      component: SiteRule
    },
    {
      path: '/RuleRev',
      component: RuleRev
    },
    {
      path: '/Contacts',
      component: Contacts
    },
    {
      path: '/Policy',
      component: Policy
    },
    {
      path: '/AddComment',
      component: AddComment
    },
    {
      path: '/Comment',
      component: Comment
    },
  ]
})

export default router;