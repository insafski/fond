import BanerSlide from "./BanerSlide";
import Default from "./Default";
import GalleryItem from "./GalleryItem";

export default {
	"imperial": Default,
	"baner": BanerSlide,
	"gallery-item": GalleryItem,
	get(type) {
		return this[type] || this.imperial;
	},
};
