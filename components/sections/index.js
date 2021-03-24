import Text from "./Text";
import { News } from "./News";
import ImageGallery from "@/components/containers/ImageGallery";

export default {
	text: Text,
	news: News,
	gallery: ImageGallery,
	imperial: "div",
	get(type) {
		return this[type] || this.imperial;
	},
};
