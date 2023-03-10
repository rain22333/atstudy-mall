<template>
	<div>
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
		<div class="text-bolder text-lg  text-red mt-2">￥1999</div>
		<div class="text-sm text-secondary mt-2">{{data.spu_name}}</div>		
	</div>
</template>

<script>
	export default{
		props : ['data'],
		data(){
			return{
				selected_img : this.data.attrKeyList[0].attrValueList[0].value_images[0]
			}
		},
		methods : {
			img_clicked(x){
				this.selected_img = x
			}
		}
	}
</script>

<style>
</style>