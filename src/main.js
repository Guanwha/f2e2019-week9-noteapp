import Vue from 'vue';
import VueQuillEditor from 'vue-quill-editor';

// eslint-disable-next-line
import 'quill/dist/quill.core.css';
// eslint-disable-next-line
import 'quill/dist/quill.snow.css';
// eslint-disable-next-line
import 'quill/dist/quill.bubble.css';

import App from './App.vue';
import router from './routers';
import store from './stores';
import './styles/all.scss';

Vue.config.productionTip = false;
Vue.use(VueQuillEditor);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
