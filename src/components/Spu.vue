<template>
	<div class="box-shadow-hover-red border-box mx-1 my-2">
		<img :src="'http://localhost:8001/img/'+ selected_img" 
			style="width: 200px;">
		<div class="mt-2">
			<img v-for="img of data.attrKeyList[0].attrValueList"
				:key=" 'img' + img.value_id "
				:src="'http://localhost:8001/img/'+img.value_images[0]" 
				class=" mx-1"
				:class="{'border-red' : img.value_images[0] == selected_img}"
				style="width: 30px;"
				@click="img_clicked(img.value_images[0])">
		</div>
		<div class="text-bolder text-lg  text-red mt-2">￥{{spuPrice}}</div>
		<div class="text-sm text-secondary mt-2">{{data.spu_name}}</div>		
	</div>
</template>

<script>
	export default{
		props : ['data'],
		data(){
			return{
				selected_img : this.data.attrKeyList[0].attrValueList[0].value_images[0],
				spuPrice : 0
			}
		},
		methods : {
			img_clicked(x){
				this.selected_img = x
			}
		},
		mounted() {
			// 遍历当前Spu得所有sku组合，找到最低价
			let index = 0			// 默认第一个sku是最低价
			for(let i = 1; i <= this.data.skuList.length - 1; i++){
				if(this.data.skuList[i].sku_price < this.data.skuList[index]){
					index = i
				}
			}
			this.spuPrice = this.data.skuList[index].sku_price
		}
	}
</script>

<style>
</style>