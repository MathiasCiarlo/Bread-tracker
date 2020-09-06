import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import { auth } from './firebase'

Vue.config.productionTip = false

auth.onAuthStateChanged(() => {
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})
