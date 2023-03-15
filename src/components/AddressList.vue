<template>
	<div class="container d-flex flex-wrap justify-content-between"> 
		<Address v-for="addr of customer.user_address_list"
			:key=" 'userAddr' +   addr.uaddr_id"></Address>
		<AddressAdd></AddressAdd>
		
	</div>
	
</template>

<script>
	import Address from '@/components/Address.vue'
	import AddressAdd from '@/components/AddressAdd.vue'
	import{mapActions,mapState} from 'vuex'
	
	
	
	export default{
		computed : {
			...mapState(['customer'])
		},
		components : {
			Address,
			AddressAdd
		},
		mounted() {
			// 发送请求，获取到当前登录用户得收货信息列表
			this.getUserAddress()
			// 发送请求，获取到所有得行政地区列表
			this.getCityList()
		},
		methods : {
			...mapActions({
				'getUserAddress' : 'customer/get_user_address_list',
				'getCityList':'customer/get_city_list'
			})
		}
	}
</script>

<style>
</style>