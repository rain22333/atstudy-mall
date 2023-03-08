// 客户服务 业务模块

// 从utils/request.js中导入相应方法
import {
	get,post,put,patch,del
} from '@/utils/request.js'

// 资源路径

const RESOURCE_CHINA = 'china'
const RESOURCE_REGIST = 'regist'
const RESOURCE_LOGIN = 'login'
const RESOURCE_CUSTOMER_USER = 'customer/user'
const RESOURCE_CUSTOMER_USERADDRESS = 'customer/useraddress'


// 给给一个服务创建一个相对应方法

export const getChina = data = > get(RESOURCE_CHINA,data)

export const regist = data = > get(RESOURCE_REGIST,data)

export const login = data = > get(RESOURCE_LOGIN,data)

export const getUserInfo = () = > get(RESOURCE_CUSTOMER_USER)

export const addUserAddress = data = > get(RESOURCE_CUSTOMER_USERADDRESS,data)

export const updateUserAddress = data = > get(RESOURCE_CUSTOMER_USERADDRESS,data)

export const deleteUserAddress = id = > get(RESOURCE_CUSTOMER_USERADDRESS,id)

export const getUserAddressList = data = > get(RESOURCE_CUSTOMER_USERADDRESS,data)
