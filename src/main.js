import config from './config/config'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './core/router'
import core_store from '@/core/store'
import '@/core/init'

import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);

import { ToastPlugin, ModalPlugin,TooltipPlugin ,CollapsePlugin} from 'bootstrap-vue'

Vue.use(TooltipPlugin)
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);
Vue.use(CollapsePlugin);

//http tools
import Axios from 'axios'
Vue.prototype.$axios = Axios;
Vue.prototype.$plugin=config.plugin;

//api
import api from './api'
Vue.prototype.$api=api;


//store
Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    ...core_store
    //put your own store here
  },
  strict: process.env.DEV,
})

//css or scss
require('@/core/scss/index.scss')

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


 







