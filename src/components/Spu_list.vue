<template>
	<div class="d-flex flex-wrap ">
		<div v-for="spu of data"
			:key=" 'spu' + spu.spu_id " style="width: 240px;" class="my-2">
			<img :src="'http://localhost:8001/img/'+ spu.attrKeyList[0].attrValueList[0].value_images[0]" 
				style="width: 200px;">
			<div class="mt-2">
				<img v-for="img of spu.attrKeyList[0].attrValueList"
					:key=" 'img' + img.value_id "
					:src="'http://localhost:8001/img/'+img.value_images[0]" 
					class=" mx-1 border-red"
					style="width: 30px;">
			</div>
			<div class="text-bolder text-lg  text-red mt-2">￥1999</div>
			<div class="text-sm text-secondary mt-2">{{spu.spu_name}}</div>		
		</div>
	</div>
</template>

<script>
	export default{
		props : ['data']
	}
</script>

<style>
</style>