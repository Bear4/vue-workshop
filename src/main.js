import Vue from 'vue'
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import App from '/src/App.vue'
import ProductsList from '/src/views/ProductsList.vue';
import ProductDetails from '/src/views/ProductDetails.vue';
import ProductForm from '/src/views/ProductForm.vue';

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.filter("asCurrency", (price) => '$' + (+price).toFixed(2));

Vue.directive("style-when-broken", (el) => {
	if (el.oldSrc != el.src) {
		el.oldSrc = el.src;
		el.classList.remove("broken-image");
	}
	if (!el.onerror) {
		el.onerror = () => {
      el.classList.add("broken-image");
		}
	}
});

const idAsProp = (r) => ({ id: +r.params.id });

const router = new VueRouter({
	routes: [
		{ path: '/', component: ProductsList },
		{ path: '/product/:id', component: ProductDetails, props: idAsProp },
		{ path: '/product/:id/edit', component: ProductForm, props: idAsProp },
	]
});

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
