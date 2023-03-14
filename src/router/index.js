import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Index from '@/components/Index.vue'
import SpuList from '@/components/SpuList.vue'
import SpuInfo from '@/components/SpuInfo.vue'
import Regist from '@/components/Regist.vue'
import Login from '@/components/Login.vue'

const routes = [{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/spuList',
		name: 'SpuList',
		component: SpuList
	},
	{
		path: '/spuInfo',
		name: 'SpuInfo',
		component: SpuInfo
	},
	{
		path: '/regist',
		name: 'Regist',
		component: Regist
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
