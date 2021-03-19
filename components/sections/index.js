import Text from "./Text";
import { News } from "./News";

export default {
	text: Text,
	news: News,
	imperial: "div",
	get(type) {
		return this[type] || this.imperial;
	},
};
