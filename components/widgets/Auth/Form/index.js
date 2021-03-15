import Register from "./Register";
import Login from "./Login";

export default {
	login: Login,
	register: Register,
	imperial: null,
	get(type) {
		return this[type] || this.imperial;
	},
};
