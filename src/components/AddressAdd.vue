<template>
	
	<!-- 添加收货信息 -->
	<div class="w-45 rounded hand box-shadow mt-4 p-4 mx-4 border-box d-flex align-items-center justify-content-center" style="min-height: 200px;"
		v-show="!edit"
		@click="add_click(true)">
		<span class="text-max text-bolder">+</span>
	</div>
	
	<!-- 编辑收货地址面板 -->
	<div class="w-45 box-shadow mx-4 d-flex mt-4 flex-column justify-content-between p-4 border-box rounded-lg"
		v-show="edit">
		<input type="text" placeholder="请输入收货人姓名" class="mt-2 rounded border-gray outline-none py-1 px-3"
			v-model='customer.uaddr_name'>
		<input type="text" placeholder="请输入收货人手机号码" class="mt-2 rounded border-gray outline-none py-1 px-3"
			v-model='customer.uaddr_phone'>
		
		<div class="d-flex mt-2 ">
			<select name="" id="" class="w-30 rounded border-gray outline-none mr-4 py-1 px-3"
				v-model="customer.uaddr_province"
				@change="uaddrProvinceChange()">
					<option  v-for="uaddr_province of customer.city_list"
						:key="uaddr_province.id"
						:value="uaddr_province">{{uaddr_province.name}}</option>
			</select>
			
			<select name="" id="" class="w-30 rounded border-gray outline-none py-1 mr-4 px-3"
				v-model="customer.uaddr_city"
				v-if="customer.uaddr_province != ''"
				@change="uaddrCityChange()">
					<option v-for="uaddr_city of customer.uaddr_province.children"
						:key="uaddr_city.id"
						:value="uaddr_city">{{uaddr_city.name}}</option>
			</select>
				
			<select name="" id="" class="w-30 rounded border-gray outline-none  py-1 px-3"
				v-model="customer.uaddr_district"
				v-if="customer.uaddr_province != '' &&  customer.uaddr_city != ''">
					<option v-for="uaddr_district of customer.uaddr_city.children"
						:key="uaddr_district.id"
						:value="uaddr_district">{{uaddr_district.name}}</option>
			</select>
		</div>
	
		
		<input type="text" placeholder="请输入收货人详细地址" class="mt-2 rounded border-gray outline-none py-1 px-3"
			v-model='customer.uaddr_address'>
		
		<div class="d-flex mt-2 justify-content-end">
			<button class='mx-3 border-0 bg-green text-white hand py-2 px-5 rounded'
				@click="addUseraddress(),add_click(false)">保存</button>
			<button class='mx-3 border-0 bg-red text-white hand py-2 px-5 rounded'
				@click="add_click(false)">取消</button>
		</div>
		
	</div>
</template>

<script>
	
	import {mapState,mapMutations,mapActions} from 'vuex'
	
	export default{
		data() {
			return {
				edit : false
			}
		},
		methods : {
			add_click(bool){
				this.edit = bool
			},
			...mapMutations({
				'uaddrProvinceChange' : 'customer/uaddr_province_change',
				'uaddrCityChange' : 'customer/uaddr_city_change',
			}),
			...mapActions({
				'addUseraddress':'customer/add_useraddress'
			})
		},
		computed : {
			...mapState(['customer'])
		}
	}
	
</script>

<style>
</style>