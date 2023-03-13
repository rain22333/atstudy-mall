<template>
	<div class="d-flex container">
		<div style="width: 450px;" class="d-flex flex-column align-items-center">
			<img :src="'http://localhost:8001/img/' + product.selected_img"  style="width: 400px;">
			<div class="d-flex align-items-center mt-3">
				<div class="text-bolder text-muted text-xxl hand"
					@click="leftClicked">&lt;</div>
				<div class="overflow-hidden" style="width: 400px;">
					<div class="d-flex" :style="{ marginLeft : -100 * index +'px' }">
						<img v-for="(img,imgIndex) of product.selected_spu.attrKeyList[0].attrValueList[product.img_list_index].value_images"
							:key="'img' + imgIndex"
							:src="'http://localhost:8001/img/' + img"  style="width: 93px;"
							:class="{'border-red' : img == product.selected_img}"
							class="mx-1"
							@click="imgClick(img)">
					</div>
				</div>
				<div class="text-bolder text-muted text-xxl hand"
					@click="rightClicked">&gt;</div>
			</div>
		</div>
		<div style="width: 750px;">
			<div class="text-bolder text-xl">{{product.selected_spu.skuList[product.sku_index].sku_name}}</div>
			<div class="d-flex align-items-end mt-3">
				<div class="text-red text-bolder text-lg">现价：</div>
				<div class="text-red text-xxl text-bolder">￥{{product.selected_spu.skuList[product.sku_index].sku_price}}</div>
				<div class="text-muted text-bolder ml-3">原价:</div>
				<div class="text-muted text-lg text-bolder text-decoration-line-through">￥{{product.selected_spu.skuList[product.sku_index].sku_originalprice}}</div>
			</div>
			<div class="text-muted text-bold mt-3">库存： {{product.selected_spu.skuList[product.sku_index].sku_quantity}}</div>
			
			<div  
				v-for="attr of product.selected_spu.attrKeyList"
				:key="'attr' + attr.key_id">
				<template v-if="attr.attrValueList[0].value_images.length != 0">
					<!-- 这里是有图片的规格属性 -->
					<div class="d-flex mt-3 ">
						<div class="text-muted text-bolder mt-2 w-15">{{attr.key_name}}</div>
						<div class="w-85 d-flex flex-wrap ">
							<div class="text-muted text-bolder rounded-lg mx-2 mt-2 d-flex align-items-center p-1 border-gray"
								v-for="key of attr.attrValueList"
								:key="'key' + key.value_id">
									<img :src="'http://127.0.0.1:8001/img/' + key.value_images[0]" style="height: 50px;">
									<span class="text-center">{{key.value_name}}</span>
								</div>
						</div>
					</div>
				</template>
				
				
				<template v-if="attr.attrValueList[0].value_images.length == 0">
					<div class="d-flex mt-3 ">
						<!-- 说明这个规格属性是没有图片的 -->
						<div class="text-muted text-bolder mt-2 w-15">{{attr.key_name}}</div>
						<div class="w-85 d-flex flex-wrap ">
							<div class="text-muted text-bolder rounded-lg mx-2 mt-2 p-2 border-gray"
								v-for="key of attr.attrValueList"
								:key="'key' + key.value_id">{{key.value_name}}</div>
						</div>
					</div>

				</template>
			</div>
			
			
			<div class="d-flex mt-3">
				<input type="text" class="outline-none border-red py-2 px-3">
				<button class='bg-red text-white border-0 py-2 px-3 mx-3'>加入购物车</button>
				<button class='bg-red text-white border-0 py-2 px-3 mx-3'>立即购买</button>
			</div>

		</div>
	</div>
</template>

<script>

import {mapState,mapMutations} from 'vuex'

export default{
	data(){
		return{
			index : 0
		}
	},
	computed : {
		...mapState(['product'])
	},
	mounted() {
		// 将仓库中默认选中的图片换成选中的第一张图片
		this.product.selected_img = this.product.selected_spu.attrKeyList[0].attrValueList[this.product.img_list_index].value_images[0]
	},
	methods:{
		...mapMutations({
			'imgClick':'product/img_click'
		}),
		leftClicked(){
			if(this.index > 0){
				this.index --
			}
		},
		rightClicked(){
			if(this.index < this.product.selected_spu.attrKeyList[0].attrValueList[this.product.img_list_index].value_images.length - 4){
				this.index ++
			}
		},
		
	}
}

</script>

<style>
</style>