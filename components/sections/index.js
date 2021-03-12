import Text from "./Text";

export default {
	text: Text,
	imperial: "div",
	get(type) {
		return this[type] || this.imperial;
	},
};
