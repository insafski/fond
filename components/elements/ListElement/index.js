import BanerSlide from "./BanerSlide";
import Default from "./Default";
import GalleryItem from "./GalleryItem";
import NewsItem from "./NewsItem";

export default {
	"imperial": Default,
	"baner": BanerSlide,
	"gallery-item": GalleryItem,
	"news": NewsItem,
	get(type) {
		return this[type] || this.imperial;
	},
};
