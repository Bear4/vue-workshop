import Vue from 'vue'
import Vuelidate from 'vuelidate';
import { sync } from 'vuex-router-sync';
import store from './store';
import router from './router';
import App from './App.vue'

import asCurrency from './filters/asCurrency';
import styleWhenBroken from './directives/styleWhenBroken';

Vue.config.productionTip = false

Vue.use(Vuelidate);

Vue.filter("asCurrency", asCurrency);
Vue.directive("style-when-broken", styleWhenBroken);


sync(store, router);

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app');