<template>
	<div class="container d-flex position-relative">
		<div class="w-17 box-shadow rounded border-box p-3 mr-2 text-xs text-secondary">
			<div class='my-2'>
				<div class="text-hover-red text-secondary my-1 text-sm"
					v-for="big of product.cate_list"
					:key="'big' + big.cate_id">{{big.cate_name}}</div>
					
				<div style="width: 810px; height: 490px;" class="cate border-box px-3 py-2 bg-white box-shadow position-absolute">
					<div class="d-flex">
						
						<div class="mr-3 text-hover-red"
							>二级分类 ></div>
						<div class="d-flex">
							<div class='mx-1 text-hover-red'>三级分类</div>
							<div class='mx-1'>三级分类</div>
							<div class='mx-1'>三级分类</div>
							<div class='mx-1'>三级分类</div>
							<div class='mx-1'>三级分类</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-66 ml-1  overflow-hidden position-relative mr-2">
			<div class="d-flex" :style="{ 'margin-left': website.carousel_index * -792 + 'px' }">
				<img :src="require('@/assets/' + 'carousel01.jpg' )" class='w-100 w-min-792' style='height: 490px;'>
				<img :src="require('@/assets/' + 'carousel02.jpg' )" class='w-100 w-min-792' style='height: 490px;'>
				<img :src="require('@/assets/' + 'carousel03.jpg' )" class='w-100 w-min-792' style='height: 490px;'>
				<img :src="require('@/assets/' + 'carousel04.jpg' )" class='w-100 w-min-792' style='height: 490px;'>
				<img :src="require('@/assets/' + 'carousel05.jpg' )" class='w-100 w-min-792' style='height: 490px;'>
			</div>
			<div class="d-flex carousel-control position-absolute">
				<div class="circle mx-1 " style="width: 15px; height: 15px;"
					@click="carousel_clicked(0)"
					:class="{'bg-white' : website.carousel_index == 0,'bg-white-opacity' : website.carousel_index != 0}"></div>
				<div class="circle mx-1 " style="width: 15px; height: 15px;"
					@click="carousel_clicked(1)"
					:class="{'bg-white' : website.carousel_index == 1,'bg-white-opacity' : website.carousel_index != 1}"></div>
				<div class="circle mx-1 " style="width: 15px; height: 15px;"
					@click="carousel_clicked(2)"
					:class="{'bg-white' : website.carousel_index == 2,'bg-white-opacity' : website.carousel_index != 2}"></div>
				<div class="circle mx-1 " style="width: 15px; height: 15px;"
					@click="carousel_clicked(3)"
					:class="{'bg-white' : website.carousel_index == 3,'bg-white-opacity' : website.carousel_index != 3}"></div>
				<div class="circle mx-1 " style="width: 15px; height: 15px;"
					@click="carousel_clicked(4)"
					:class="{'bg-white' : website.carousel_index == 4,'bg-white-opacity' : website.carousel_index != 4}"></div>
			</div>
		</div>
		<div class="w-15 d-flex flex-column justify-content-between">
			<img :src="require('@/assets/' + 'carousel-right01.jpg' )" class='w-100 '>
			<img :src="require('@/assets/' + 'carousel-right01.jpg' )" class='w-100 '>
			<img :src="require('@/assets/' + 'carousel-right01.jpg' )" class='w-100 '>
		</div>
	</div>
	
</template>

<script>
	
	import {mapState} from 'vuex'
	import {getCategoryList} from '@/data/product.js'
	
	export default {
		//计算属性
		computed : {
			...mapState(['website','product'])
		},
		methods :{
			// 轮播控件点击事件
			carousel_clicked(x){
				this.website.carousel_index = x
			}
		},
		mounted() {
			// 视图挂载完毕发送ajax请求获取到所有得分类信息
			// getCategoryList({pid : ''}).then(response => response.json()).then(response =>{
			// 	console.log(response)
			// })
			getCategoryList({pid : ""}).then(response => {
				this.product.cate_list = response.data.data
				this.product.selected_cate = this.product.cate_list[0]
				console.log(this.product.selected_cate.children)
			})
			
		}
		
	
	}
</script>

<style scoped>
	.carousel-control{
		right: 20px;
		bottom: 20px;
	}
	
	.cate{
		top: 0px;
		left: 200px;
		z-index: 99;
	}
	
</style>