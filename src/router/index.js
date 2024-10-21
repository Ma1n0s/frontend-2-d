import AddComment from '@/views/AddComment.vue';
import Comment from '@/views/Comment.vue';
import Comp from '@/views/Comp.vue';
import Contacts from '@/views/Link foter/Contacts.vue';
import Login from '@/views/Login.vue';
import Logout from '@/views/Logout.vue';
import Main from '@/views/Main.vue';
import MainForm from '@/views/MainForm.vue';
import Organization from '@/views/Organization.vue';
import Policy from '@/views/Link foter/Policy.vue';
import Register from '@/views/Register.vue';
import RegisterComp from '@/views/Link foter/RegisterComp.vue';
import RuleRev from '@/views/Link foter/RuleRev.vue';
import SiteRule from '@/views/Link foter/SiteRule.vue';
import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/MainForm',
      component: Main
    },
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
      path: '/',
      name: 'home',
      component: MainForm,
      
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
    {
      path: '/Comp',
      component: Comp
    },
    {
      path: '/MainForm/Organization/:id',
      component: Organization
    },
  ]
})

export default router;