<template>
	<div class="container d-flex position-relative">
		<div class="w-17 box-shadow rounded border-box p-3 mr-2 text-xs text-secondary">
			<div class='my-2'>
				<div class="text-secondary my-1 text-hover-red text-sm"
					v-for="big of product.cate_list"
					:key=" 'big' + big.cate_id "
					@mouseover="big_hover(big)">
					{{big.cate_name}}
				
					<div style="width: 810px; height: 490px;" 
						class="cate text-secondary border-box px-3 py-2 bg-white box-shadow position-absolute"	
						v-show='big == product.selected_big_category'>
						<div class="d-flex align-items-start"
							v-for="mid of big.children"
							:key="'mid' + mid.cate_id">
							<!-- 二级分类 -->
							<div class="mr-3 my-1 d-flex w-10">{{mid.cate_name}}></div>
							<!-- 三级分类 -->
							<div class="d-flex flex-wrap w-90">
								<div class='mx-1 my-1 text-hover-red'
									v-for="small of mid.children"
									:key=" 'small' + small.cate_id ">{{small.cate_name}}</div>
							</div>
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
	
	import {mapState,mapActions,mapMutations} from 'vuex'
	
	export default {
		//计算属性
		computed : {
			...mapState(['website','product'])
		},
		methods :{
			...mapActions({
					'getCategoryList' : 'product/get_category_list'
			}),
			...mapMutations({
				'big_hover' : 'product/big_cate_hover'
			}),
			// 轮播控件点击事件
			carousel_clicked(x){
				this.website.carousel_index = x
			}
		},
		mounted() {
			this.getCategoryList()
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