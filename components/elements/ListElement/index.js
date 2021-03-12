import BanerSlide from "./BanerSlide";
import Default from "./Default";

export default {
	imperial: Default,
	baner: BanerSlide,
	get(type) {
		return this[type] || this.imperial;
	},
};
