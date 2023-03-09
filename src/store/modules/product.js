import {getCategoryList} from '@/data/product.js'

export default {
	namespaced : true,
	state: {
		cate_list : [],
		selected_big_category : undefined		// 当前选中的一级分类
	},
	mutations: {
		// 鼠标掠过改变当前选中的一级分类
		big_cate_hover(context,payload){
			context.selected_big_category = payload
		}
	},
	actions: {
		// 异步方法在这里定义
		get_category_list(context,payload){	// context当前仓库的上下文对象 payload 传入进来的参数
			console.log(context)
			console.log(payload)
			
			// 获取到所有的分类信息赋值给当前仓库中的cate_list
			getCategoryList({pid : ""}).then(response => {
				context.state.cate_list = response.data.data
			})
		}
	},

}
