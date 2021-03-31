import About from "./About";
import Text from "./Text";
import { News } from "./News";
import ImageGallery from "@/components/containers/ImageGallery";
import BanerMap from "./Baner";
import DetailedNews from "./DetailedNews";

export default {
	map: BanerMap,
	about: About,
	text: Text,
	news: News,
	detailed_news: DetailedNews,
	gallery: ImageGallery,
	imperial: "div",
	get(type) {
		return this[type] || this.imperial;
	},
};
