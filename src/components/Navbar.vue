<template>
	<div id="nav">
		<div class="bg-gray">
			<div class="container py-1 px-3 d-flex text-xs border-box ">
				<router-link to='/' class=" mr-auto text-decoration-none text-sm"
					:class="{'text-red' : website.nav_index == 0, 'text-secondary' : website.nav_index != 0}"
					@click="nav_clicked(0)">学掌门商城</router-link>
				<router-link to='/login' class='px-2 text-hover-red    border-right-dark text-decoration-none'
					:class="{'text-red' : website.nav_index == 1, 'text-secondary' : website.nav_index != 1}"
					@click="nav_clicked(1)">{{customer.user_info == undefined ? '你好，请登录' : customer.user_info.user_name}}</router-link>
				<router-link to='/regist' class='px-2  border-right-dark  text-decoration-none'
					:class="{'text-red' : website.nav_index == 2, 'text-secondary' : website.nav_index != 2}"
					@click="nav_clicked(2)">免费注册</router-link>
				<router-link to='/order_list' class='text-hover-red px-2  border-right-dark text-decoration-none'
					:class="{'text-red' : website.nav_index == 3, 'text-secondary' : website.nav_index != 3}"
					@click="nav_clicked(3)">我的订单</router-link>
				<router-link to='/vip' class='px-2 text-hover-red  border-right-dark text-decoration-none'
					:class="{'text-red' : website.nav_index == 4, 'text-secondary' : website.nav_index != 4}"
					@click="nav_clicked(4)">我的会员</router-link>
				<router-link to='/address' class='px-2 text-hover-red  border-right-dark text-decoration-none'
					:class="{'text-red' : website.nav_index == 5, 'text-secondary' : website.nav_index != 5}"
					@click="nav_clicked(5)">收货信息</router-link>
				<router-link to='/customer' class='px-2 text-hover-red  border-right-dark text-decoration-none'
					:class="{'text-red' : website.nav_index == 6, 'text-secondary' : website.nav_index != 6}"
					@click="nav_clicked(6)">客户服务</router-link>
				<router-link to='/website' class='text-hover-red  px-2 border-right-dark text-decoration-none'
					:class="{'text-red' : website.nav_index == 7, 'text-secondary' : website.nav_index != 7}"
					@click="nav_clicked(7)">网站导航</router-link>
				<router-link to='/atstudy' class='px-2  text-hover-red  text-decoration-none'
					:class="{'text-red' : website.nav_index == 8, 'text-secondary' : website.nav_index != 8}"
					@click="nav_clicked(8)">手机学掌门</router-link>
			</div>
		</div>
	
		
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		//计算属性
		computed : {
			...mapState(['website','customer'])
		},
		methods :{
			nav_clicked(x){
				this.website.nav_index = x
			}
		},
		mounted() {
			// 从缓存中获取用户信息，将他放到仓库中
			this.customer.user_info = JSON.parse(localStorage.getItem('user_info'))
		}

	}
</script>

<style>
</style>