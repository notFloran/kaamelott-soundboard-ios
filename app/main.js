import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

new Vue({

  router,
  template: `<Frame><router-view/></Frame>`,

  store,

}).$start();
