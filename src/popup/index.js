import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import VueIntl from 'vue-intl'
import vClickOutside from 'v-click-outside'

Vue.config.productionTip = false

sync(store, router)

Vue.use(VueIntl)
Vue.use(vClickOutside)

Vue.setLocale('en-US')

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
