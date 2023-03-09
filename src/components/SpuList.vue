<template>
	<div class="container box-shadow rounded py-2 px-4 border-box">
		<div class="d-flex text-muted te-xs mt-2 " v-for="(attr,index) of product.attr_list"
			:key=" 'attr' + attr.key_id ">
			<!-- 筛选属性键的名称 -->
			<div class="text-right w-13  mx-2 p-1 ">{{attr.key_name}}:</div>
			
			<!-- 全部 -->
			<div class='mx-2 p-1 w-5 hand' :class="{'text-red' : product.selected_attr_list[index] == undefined}"
			@click="attr_clicked({'index' : index,'attr' : undefined})">全部</div>
			
			<!-- 筛选属性值 -->
			<div class="d-flex flex-wrap">
				<div class='mx-2 p-1 hand' 
					v-for=" key_value of attr.spuAttrValueList " 
					:key=" 'value' + key_value.id "
					
					@click="attr_clicked({'index' : index,'attr' : key_value})"
					
					:class="{'text-red' : product.selected_attr_list[index] == key_value}">{{key_value.value_name}}</div>
			</div>
		</div>
	</div>
	
	
	
	<div class="container mt-5">
		<!-- 商品列表 -->
		
		<Spu-list :data='product.spu_list'></Spu-list>
		<!-- /商品列表 -->
	</div>
</template>

<script>
	import {
		mapState,
		mapActions,
		mapMutations
	} from 'vuex'
	
	// 导入单个商品组件
	import Spu_list from '@/components/Spu_list.vue'

	export default {

		computed: {
			...mapState(['product'])
		},
		methods: {
			...mapMutations({
				'attr_clicked': 'product/attr_clicked'
			}),
			...mapActions({
				'getAttrList': 'product/get_attr_list',
				"getSpuList" : "product/get_spu_list"
			})
		},
		mounted() {
			this.getAttrList()
			this.getSpuList()
		},
		components : {
			'Spu-list' : Spu_list
		}
	}
</script>

<style>
</style>
