import VueRouter from 'vue-router';

import Home from './Home';
import About from './About';

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/', component: Home }, { path: '/about', component: About }],
});

export default router;
