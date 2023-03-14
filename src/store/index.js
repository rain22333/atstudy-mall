import {
	createStore
} from 'vuex'
import website from './modules/website.js'
import product from './modules/product.js'
import customer from './modules/customer.js'

export default createStore({

	modules: {
		website,
		product,
		customer
	}
})
