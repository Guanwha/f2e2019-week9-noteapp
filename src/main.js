import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import store from './stores';
import './styles/all.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
