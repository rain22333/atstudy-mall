import {login,regist,getUserInfo,getUserAddress,getChina,addUserAddress} from '@/data/customer.js'
import router from '@/router'

export default {
	namespaced: true,
	state: {
		user_phone: '', // 注册页面的手机号码
		user_password: '', // 注册页面的用户密码
		check_user_password: '', // 注册页面的确认密码
		user_name: '' ,// 注册页面的用户昵称


		username: '', // 登录页面的用户名
		password: '' ,// 登录页面的用户密码
		
		
		user_info : undefined,			// 登录用户得信息
		
		user_address_list : [],			// 登录用户得收货地址

		uaddr_name : '',				// 收货人姓名
		uaddr_phone	: '',				// 收货人手机号
		uaddr_province : '',			// 收货人一级行政地区
		uaddr_city : '',				// 收货人二级行政地区
		uaddr_district : '',			// 收货人三级行政地区
		uaddr_address : '',				// 收货人详细地址
		uaddr_isdefault : 0,			// 是否是默认收货地址
		
		
		city_list : []					// 所有得行政地区列表
	},
	mutations: {

		// 一级行政地区改变
		uaddr_province_change(context){
			// 一级地区发送改变，二三级地区都要变回空字符串
			context.uaddr_city = '',
			context.uaddr_district = ''
		},
		
		// 二级地区改变
		uaddr_city_change(context){
			context.uaddr_district = ''
		}


	},
	actions: {
		
		
		// 新增用户收货信息方法
		add_useraddress(context){
			// 只有选择了一级二级行政地区才能提交
			if(context.state.uaddr_province != '' && context.state.uaddr_city != ''){
				
				addUserAddress({
					uaddr_name : context.state.uaddr_name,
					uaddr_phone : context.state.uaddr_phone,
					uaddr_province : context.state.uaddr_province.name,
					uaddr_city : context.state.uaddr_city.name,
					uaddr_district : context.state.uaddr_district == '' ? '' : context.state.uaddr_district.name,
					uaddr_address : context.state.uaddr_address,
					uaddr_isdefault : context.state.uaddr_isdefault,
				}).then(response =>{
					
					// 判断添加收货信息请求是否成功
					if(response.data.httpcode == 200){
						
						alert(`添加成功`)
						// 将·添加成功得收货信息追加到仓库中登录用户得收货地址列表中
						context.state.user_address_list.push(response.data.data)
					}
				})
			}else{
				alert(`请选择行政地区`)
			}

		},
		
		
		// 获取到所有得行政地区列表
		get_city_list(context){
			// 在进入到收货信息页面，就发送请求获取到所有得行政地区
			getChina().then(response => {
				// 将获取到得行政地区放到仓库中
				context.state.city_list = response.data.data
			})
		},
		
		// 获取用户信息列表
		get_user_address_list(context){
			// 获取当前登录用户得收货信息列表
			getUserAddress().then(response =>{
				// 将收获信息赋值给仓库中得user_address_list
				context.state.user_address_list = response.data.data
			})
		},
		
		
		// 获取用户信息
		get_user_info(context){
			getUserInfo().then(response =>{
				context.state.user_info = response.data.data
				// 除了将用户信息放到仓库中，还需要将他放到本地缓存
				localStorage.setItem('user_info',JSON.stringify(response.data.data))
			})
		},
		
		
		// 登录方法
		user_login(context){
			login({
				username : context.state.username,
				password : context.state.password
			}).then(response =>{
				if(response.data.httpcode == 200){
					// 需要重定向到首页中
					// this.$router.push('/')
					console.log(`登录成功`)
					// 先获取到用户令牌将其放入本地缓存中
					localStorage.setItem('token',response.data.data)
					
					
					// 调用获取用户信息得方法
					this.dispatch('customer/get_user_info')
					
					// 需要跳转到首页
					router.push({name:'Index'})
				
					
				}
			})
		},
		
		
		
		user_regist(context) {

			if(context.check_user_password == context.user_password){
				regist({
					user_phone : context.state.user_phone,
					user_password : context.state.user_password,
					user_name : context.state.user_name
				}).then(response =>{
					// console.log(response)
					if(response.data.httpcode == 200){
						router.push({name : 'Login'})
					}
				})
			}else{
				alert(`两次输入的密码不一致`)
			}
		}
	}
}
