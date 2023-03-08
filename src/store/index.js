import {
	createStore
} from 'vuex'
import website from './modules/website.js'

export default createStore({

	modules: {
		website
	}
})
