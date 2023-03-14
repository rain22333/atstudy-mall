import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Index from '@/components/Index.vue'
import SpuList from '@/components/SpuList.vue'
import SpuInfo from '@/components/SpuInfo.vue'
import Regist from '@/components/Regist.vue'

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
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
