// import {regist} from '@/data/customer.js'


export default{
	namespaced: true,
	state: {
		user_phone: '',				// 注册页面的手机号码
		user_password : '',			// 注册页面的用户密码
		check_user_password : '',		// 注册页面的确认密码
		user_name : ''			// 注册页面的用户昵称
	},
	mutations: {
		
		
		
	},
	actions: {
		user_regist(context){
			console.log(context)
			console.log(this.$route)
			// if(context.check_user_password == context.user_password){
			// 	regist({
			// 		user_phone : context.state.user_phone,
			// 		user_password : context.state.user_password,
			// 		user_name : context.state.user_name
			// 	}).then(response =>{
			// 		// console.log(response)
			// 		if(response.data.httpcode == 200){
			// 			this.$router.push({name : '/'})
			// 		}
			// 	})
			// }else{
			// 	alert(`两次输入的密码不一致`)
			// }
		}
	}
}