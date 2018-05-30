import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './routes';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
