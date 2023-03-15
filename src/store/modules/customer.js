import {login,regist,getUserInfo} from '@/data/customer.js'
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
		
		
		user_info : undefined			// 登录用户得信息

	},
	mutations: {



	},
	actions: {
		
		
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
