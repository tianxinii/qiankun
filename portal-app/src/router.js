import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '*',
		name: 'about',
		component: () => import('@/views/404.vue'),
	},
	// {
	// 	path: '/app1',
	// 	name: 'app1',
	// 	children:[]
	// },
	// {
	// 	path: '/app2',
	// 	name: 'app1',
	// 	children:[]
	// },

];

export default routes;