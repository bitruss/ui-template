import Vue from 'vue'

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);


//globally components
import FeatherIcon from './global/FeatherIcon.vue'
Vue.component('FeatherIcon', FeatherIcon)


import './plugins/vue-select'