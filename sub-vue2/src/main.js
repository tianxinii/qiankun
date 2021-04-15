// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './public-path';
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

let instance = null;
function render() {

	instance = new Vue({
		router,
		render: h => h(App),
	}).$mount('#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
	render();
}

export async function bootstrap() {
	console.log('vue app bootstraped');
}

export async function mount(props) {
	console.log('props from main app', props);
	render();
}

export async function unmount() {
	instance.$destroy();
	instance = null;
}