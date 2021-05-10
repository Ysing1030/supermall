import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import lazyload from 'vue-lazyload'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue();
Vue.use(lazyload,{
  loading:''
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
