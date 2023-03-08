<template>
	<div class="container d-flex align-items-center">
		<div class="w-15 mr-4">
			<img :src="require('@/assets/' + 'logo.png' )" style="width: 145px;">
		</div>
		<div class="w-72  d-flex flex-column align-items-center" style="margin-left: -20px;">
			<div class="d-flex" style="min-width: 72%;">
				<input type="text" class="w-50  border-right-none rounded-left outline-none border-red px-3 py-2"  placeholder="商品名称/品牌/分类/规格属性">
				<button class="px-3 py-2 bg-red text-white border-0 rounded-right mr-3 hand">搜索</button>
				<router-link to="/cart" class="text-decoration-none border-gray px-5 rounded py-1 text-red">我的购物车</router-link>
			</div>
			<div class="mt-2 d-flex text-xs text-secondary">
				<div class='mx-2 hand text-red'>春日环游记</div>
				<div class='mx-2 hand text-hover-red'>iPhone12</div>
				<div class='mx-2 hand text-hover-red'>小米</div>
				<div class='mx-2 hand text-hover-red'>榴莲尝鲜</div>
				<div class='mx-2 hand text-hover-red'>生鲜五折</div>
				<div class='mx-2 hand text-hover-red'>品质家电</div>
				<div class='mx-2 hand text-hover-red'>新品激光</div>
				<div class='mx-2 hand text-hover-red'>春茶</div>
				<div class='mx-2 hand text-hover-red'>正品农贸</div>
				<div class='mx-2 hand text-hover-red'>嗨9就购了</div>
				<div class='mx-2 hand text-hover-red'>鱼人节好物</div>
			</div>
			<div class="d-flex mt-3 text-lg  text-secondary text-lighter" >
				<div class='mx-2 hand text-red'>秒杀</div>
				<div class='mx-2 hand text-hover-red'>优惠卷</div>
				<div class='mx-2 hand text-hover-red'>学掌门会员</div>
				<div class='mx-2 hand text-hover-red'>品牌闪购</div>
				<div class='mx-2 hand text-hover-red'>拍卖</div>
				<div class='mx-2 hand text-hover-red'>家电数码</div>
				<div class='mx-2 hand text-hover-red'>超市日用</div>
				<div class='mx-2 hand text-hover-red'>蔬果生鲜</div>
				<div class='mx-2 hand text-hover-red'>国际好货</div>
				<div class='mx-2 hand text-hover-red'>潮流服饰</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>