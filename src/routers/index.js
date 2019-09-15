import Vue from 'vue';
import Router from 'vue-router';
// import Test from '../pages/Test.vue';
import Notes from '../pages/Notes.vue';
import Note from '../pages/Note.vue';
import EditNote from '../pages/EditNote.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'test',
    //   component: Test,
    // },
    {
      path: '/',
      name: 'notes',
      component: Notes,
    },
    {
      path: '/note/:id',
      name: 'note',
      component: Note,
    },
    {
      path: '/editnote/:id',
      name: 'editnote',
      component: EditNote,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
    },
  ],
});
