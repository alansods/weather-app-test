import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toasted from 'vue-toasted';
Vue.use(Toasted);

Vue.toasted.register('success', (message) => {
  return Vue.toasted.show(message, {
    theme: 'toasted-success',
    position: 'bottom-right',
    duration: 3000,
    className: 'custom-toast-success',
  });
});

Vue.toasted.register('error', (message) => {
  return Vue.toasted.show(message, {
    theme: 'toasted-error',
    position: 'bottom-right',
    duration: 3000,
    className: 'custom-toast-error',
  });
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
