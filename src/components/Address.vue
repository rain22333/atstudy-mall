<template>
	<div class="w-45 box-shadow mx-4 mt-4 p-4 border-box rounded-lg"
		v-show="true">
		<div class="d-flex text-bold text-secondary">
			<div >张三</div>
			<div class="ml-3 mr-auto">上海市</div>
			<div class="text-muted hand">x</div>
		</div>
		<div class="mt-4 d-flex text-xs text-muted">
			<div class="mr-2 w-13 text-right">收货人:</div>
			<div class="text-secondary">张三</div>
		</div>
		<div class="mt-2 d-flex text-xs text-muted">
			<div class="mr-2 w-13 text-right">所在地区:</div>
			<div class="text-secondary">江苏省南京市市区</div>
		</div>
		<div class="mt-2 d-flex text-xs text-muted">
			<div class="mr-2 w-13 text-right">地址:</div>
			<div class="text-secondary mr-auto">江苏省南京市市区</div>
			<div class="hand">编辑</div>
		</div>
		<div class="mt-2 d-flex text-xs text-muted">
			<div class="mr-2 w-13 text-right">手机:</div>
			<div class="text-secondary mr-auto">12345678901</div>
			<div class="hand">设为默认</div>
		</div>
	</div>
	
	
	
	<!-- 编辑收货地址面板 -->
	<div class="w-45 box-shadow mx-4 d-flex flex-column justify-content-between p-4 border-box rounded-lg"
		v-show="false">
		<input type="text" placeholder="请输入收货人姓名" class="mt-2 rounded border-gray outline-none py-1 px-3">
		<input type="text" placeholder="请输入收货人手机号码" class="mt-2 rounded border-gray outline-none py-1 px-3">
		
		<div class="d-flex mt-2 justify-content-between">
			<select name="" id="" class="w-30 rounded border-gray outline-none py-1 px-3"></select>
			<select name="" id="" class="w-30 rounded border-gray outline-none py-1 px-3"></select>
			<select name="" id="" class="w-30 rounded border-gray outline-none py-1 px-3"></select>
		</div>
	
		
		<input type="text" placeholder="请输入收货人详细地址" class="mt-2 rounded border-gray outline-none py-1 px-3">
		
		<div class="d-flex mt-2 justify-content-end">
			<button class='mx-3 border-0 bg-green text-white py-2 px-5 rounded'>保存</button>
			<button class='mx-3 border-0 bg-red text-white py-2 px-5 rounded'>取消</button>
		</div>
	</div>
	
</template>

<script>
</script>

<style>
</style>