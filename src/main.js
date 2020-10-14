import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import headerLayout from './components/header.vue';
import footerLayout from './components/footer.vue';
import './assets/css/user.scss';
import './assets/css/common.scss';
//import "./assets/js/jquery-1.11.0.min.js";
//import $ from "./assets/js/jquery-1.11.0.min.js";
//window.$ = $;
import './assets/js/common.js';

Vue.component('header-layout', headerLayout);
Vue.component('footer-layout', footerLayout);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
