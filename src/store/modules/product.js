import {
	getCategoryList,
	getAttrList,
	getSpuList
} from '@/data/product.js'


export default {
	namespaced: true,
	state: {
		cate_list: [],									// 用于主页存放所有分类的数组			
		selected_big_category: undefined, 				// 当前选中的一级分类
		selected_category: undefined,					 // 当前选中的三级分类
		attr_list: [], 									// 筛选属性
		selected_attr_list: [], 						// 选择的筛选属性，数量和筛选属性是一致的
		selected_attr_str_list: '', 					// 选择的商品筛选属性值列表
		spu_list: [], 									//符合筛选条件的商品列表
		start: 0,										// 起始索引
		length: 10,										// 查询的记录数
		keyWord : '',
		category_list : [],				// 用于商品详情页面存放对应品牌的分类用的数组
		
		
		
		cate_id_list : [130,34,20,219]					,// 商品专场的id
		special_spu_list : [],							// 专场商品数据
		has_more : true									,// 是否还有更多数据
		
		selected_spu : undefined,					// 被选中得商品
		img_list_index : 0,							// 商品默认选中的颜色索引
		sku_index : 0	,							// 当前商品的sku组合的索引		
		selected_img : undefined,					// 商品详情页面左边选中得图片
		selected_sku : undefined					,// 商品默认选中得sku得组合
		
		
	},
	mutations: {
		
		// 商品详情页面的某个规格属性被点击了
		/**
		 * @param {Object} context
		 * @param {Object} payload   json对象，需要两个参数，应该是被点击的规格的value_id,另一个是被点击的规格属性的索引
		 */
		sku_attr_clicked(context,payload){
			
			console.log(payload)
			
			let idList = []			// 定义一个空的数组，用于存放新的规格属性的组合的id
			// 遍历当前选中的sku组合的这个数组
			for(let i= 0; i <= context.selected_sku.length - 1; i++){
				// 如果遍历到的规格属性的索引和我们传过来的规格属性的索引不相等，说明不是我们点击的规格属性
				if(i != payload.index){
					// 直接将之前的value_id传过去
					idList.push(context.selected_sku[i].value_id)
				}else{					// 这里说明是我们点击的规格属性
					idList.push(payload.value_id)			// 将我们传过来的value_id放到idList中
				}
			}
			console.log(idList)	
			// 获取到新的id组合之后，需要遍历索引的该商品的sku组合，找到一样的，改变仓库中的sku_index
			let flag = true			
			for(let i = 0; i <= context.selected_spu.skuList.length - 1; i++ ){
				// 每次判断新的组合之前都将标记重置为true
				flag = true
				// 将这个组合中的字符串转成json对象
				let attrList = JSON.parse(context.selected_spu.skuList[i].sku_spuattr)
				// 一一判断，这个组合是不是我们要找的新的组合
				for(let i = 0; i <= attrList.length - 1; i++){
					console.log(``)
					// 有一个规格属性的value_Id对应不上，就说明不是我们要找的组合
					if(attrList[i].value_id != idList[i]){
						flag = false
						break
					}
				}
				// 如果上面没有将标记变量改为false，说明所有的value_id都对上了，这就是我们要找的组合
				if(flag){
					context.sku_index = i
					// 将当前商品的规格属性的组合的json对象也换掉
					context.selected_sku = JSON.parse(context.selected_spu.skuList[context.sku_index].sku_spuattr)
				}
			}
			

		},
		
		
		// 商品详情左边的某个图片被点击了
		img_click(context,payload){
			context.selected_img = payload
		},
		
		// 某个商品被点击了
		spu_clicked(context,payload){
			
			// 商品被点击的时候将商品数据放到缓存中
			
			context.selected_spu = payload
			console.log(`这是被选中得商品`)
			console.log(context.selected_spu)
			
			// 遍历当前商品的所有的颜色，确定哪个颜色是默认选中的
			for(let i = 0 ; i <= context.selected_spu.attrKeyList[0].attrValueList; i++){
				if(context.selected_spu.attrKeyList[0].attrValueList[i].value_id == JSON.parse(this.product.selected_spu.skuList[context.sku_index].sku_spuattr)[0].value_id){
					context.img_list_index = i
				}
			}
			// 将被点击得商品得默认选中得sku组合得字符串转成json对象复制到仓库中得selected_sku
			context.selected_sku = JSON.parse(context.selected_spu.skuList[context.sku_index].sku_spuattr)
			console.log(context.selected_sku)
			
			
			// 将当前商品的数据和默认选中的sku的组合的json对象放到缓存中
			sessionStorage.setItem('spu',JSON.stringify(context.selected_spu))
			sessionStorage.setItem('sku',JSON.stringify(context.selected_sku))
		},
		
		
		// 搜索按钮点击事件
		search_clicked(context){
			
			
			// 点击搜索，将之前获取到的商品全部清空，筛选条件、has_more...全部变回原样
			context.spu_list = []
			context.selected_attr_str_list = ''
			context.start = 0
			context.has_more = true
			
			this.dispatch('product/get_spu_list')
		},
		
		
		// 获取下一页数据
		next_page(context){
			context.start = context.start + context.length
			// 重新获取到数据
			this.dispatch('product/get_spu_list')
		},
		
		
		// 商品详情页面的点击事件
		spu_category_clicked(context,payload){
			
			// 判断传入进来得参数是不是undefined  
			if(payload == undefined){
				// 将之前获取到的分类列表清空
				context.category_list = []
			}
			
			// 将起始索引变为0，将之前得商品列表置空，将has_more标记变回true
			context.spu_list = []
			context.start = 0
			context.has_more = true
			
			// 如果传入进来得是undefined，说明点击了全部分类，应该将之前选中得筛选条件 全部置空
			context.selected_attr_str_list = ''
			
			// 将当前选中的三级分类改变
			context.selected_category = payload
			// 需要再次发送ajax请求获取到满足条件的数据
			this.dispatch('product/get_spu_list')
			// 获取到该分类的筛选列表
			this.dispatch('product/get_attr_list')
		},
		
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
			
			
			
			// 将之前获取到得商品数据置空
			context.spu_list = []
			// 将起始索引变回0
			context.start = 0
			// 将has_more标记变回true
			context.has_more = true
			
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
				'cate_id': context.state.selected_category == undefined ?  null : context.state.selected_category.cate_id,
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
				spu_name: context.state.keyWord == '' ? '' : context.state.keyWord, //	商品名称
				spu_title: '', //	商品标题
				spu_status: 1, //	商品状态：只查询上架状态的商品
				cate_id: context.state.selected_category == undefined ?  null : context.state.selected_category.cate_id, //	商品分类编号
				valueList: context.state.selected_attr_str_list, //	商品筛选属性值列表
				start: context.state.start, //	起始索引
				length: context.state.length //	查询的记录数
			}).then(response => {
				// 查询到了符合条件的商品信息
				// context.state.spu_list = response.data.data				//将商品列表存放到了spu_list中
				
				// 将获取到得商品数据拼接到原来得商品列表中
				context.state.spu_list  = context.state.spu_list.concat(response.data.data)
				
				// 判断获取到的数据得数组长度是否小于length
				if(response.data.data.length < context.state.length){
					context.state.has_more = false
				}
				
				if(context.state.category_list.length == 0 ){
					context.state.category_list = response.data.categoryList		// 将商品的分类信息存放到了category_list
				}
			})
		},
		
		// 获取到专场商品的数据
		get_special_list(context){
			for(let i = 0; i <= context.state.cate_id_list.length - 1; i++){
				getSpuList({
					spu_name: '', //	商品名称
					spu_title: '', //	商品标题
					spu_status: 1, //	商品状态：只查询上架状态的商品
					cate_id: context.state.cate_id_list[i], //	商品分类编号
					valueList: '', //	商品筛选属性值列表
					start: 0, //	起始索引
					length: 5 //	查询的记录数
				}).then(response =>{
					context.state.special_spu_list[i] = response.data
				})
			}
			console.log(context.state.special_spu_list)
		}

	},

}
