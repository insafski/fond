import Text from "./Text";
import { News } from "./News";
import ImageGallery from "@/components/containers/ImageGallery";
import Baner from "./Baner";
import DetailedNews from "./DetailedNews";

export default {
	text: Text,
	baner: Baner,
	news: News,
	detailed_news: DetailedNews,
	gallery: ImageGallery,
	imperial: "div",
	get(type) {
		return this[type] || this.imperial;
	},
};
