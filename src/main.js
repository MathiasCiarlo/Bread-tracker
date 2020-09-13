import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import { auth } from './firebase'
import Vuex from 'vuex'
import * as authStore from '@/store/modules/auth'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth: {
      namespaced: true,
      ...authStore,
    },
  },
})

auth.onAuthStateChanged(() => {
  new Vue({
    store,
    router,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app')
})
