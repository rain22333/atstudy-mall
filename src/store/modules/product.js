import {
	getCategoryList,
	getAttrList,
	getSpuList
} from '@/data/product.js'


export default {
	namespaced: true,
	state: {
		cate_list: [],
		selected_big_category: undefined, // 当前选中的一级分类
		selected_category: undefined, // 当前选中的三级分类
		attr_list: [], // 筛选属性
		selected_attr_list: [], // 选择的筛选属性，数量和筛选属性是一致的
		selected_attr_str_list: '', // 选择的商品筛选属性值列表
		spu_list: [], //符合筛选条件的商品列表
		start: 0,
		length: 10
	},
	mutations: {
		// 鼠标掠过改变当前选中的一级分类
		big_cate_hover(context, payload) {
			context.selected_big_category = payload
		},

		// 点击选择三级分类
		category_clicked(context, payload) {
			// 将当前仓库中的选中的三级分类改成所点击的三级分类
			context.selected_category = payload
		},

		// 点击筛选属性，将对应的筛选属性放到selected_attr_list对应的元素上（重新生成筛选条件：商品筛选属性值列表）
		attr_clicked(context, payload) {
			// 每次点击先将之前得筛选属性值得字符串 置空
			context.selected_attr_str_list = ''
			
			// 将点击的筛选属性放到 所所选中的筛选属性数组对应的索引位置
			context.selected_attr_list[payload.index] = payload.attr
			
			// 遍历所有选中得筛选属性数组，将所有得筛选属性得id拼接到选择的商品筛选属性值列表中
			for (let attr of context.selected_attr_list) {
				if (attr != undefined) {
					context.selected_attr_str_list += attr.id + ','
				}
			}
			context.selected_attr_str_list = context.selected_attr_str_list.substring(0, context.selected_attr_str_list.length - 1)
			// 重新调用获取商品的方法   
			this.dispatch('product/get_spu_list')		
		},




	},
	actions: {
		// 异步方法在这里定义
		get_category_list(context, payload) { // context当前仓库的上下文对象 payload 传入进来的参数
			console.log(context)
			console.log(payload)

			// 获取到所有的分类信息赋值给当前仓库中的cate_list
			getCategoryList({
				pid: ""
			}).then(response => {
				context.state.cate_list = response.data.data
			})
		},

		// 获取到当前分类所对应的筛选属性
		get_attr_list(context) {

			// 调用异步方法获取到筛选属性
			getAttrList({
				'cate_id': context.state.selected_category.cate_id,
				'key_issku': 0,
				'key_ishigh': 0
			}).then(response => {
				// 将获取到的对应分类的筛选属性赋值给当前仓库中的attr_list
				context.state.attr_list = response.data.data
				// console.log(context.state.attr_list)
				// 给选中的筛选数组复制，默认（页面刚刚加载完毕的时候全部是undefined）

				// 先将原来的筛选属性清空
				context.state.selected_attr_list = []
				for (let i = 0; i <= context.state.attr_list.length - 1; i++) {
					context.state.selected_attr_list.push(undefined)
				}
				console.log(context.state.selected_attr_list)
			})
		},

		// 获取到符合筛选属性列表的商品列表
		get_spu_list(context) {
			getSpuList({
				spu_name: '', //	商品名称
				spu_title: '', //	商品标题
				spu_status: 1, //	商品状态：只查询上架状态的商品
				cate_id: context.state.selected_category.cate_id, //	商品分类编号
				valueList: context.state.selected_attr_str_list, //	商品筛选属性值列表
				start: context.state.start, //	起始索引
				length: context.state.length //	查询的记录数
			}).then(response => {
				context.state.spu_list = response.data.data
				console.log(context.state.spu_list)
			})
		}

	},

}
