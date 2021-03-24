import React from "react";

import ImageGallery from "@/components/containers/ImageGallery";

export default {
	title: "Containers/ImageGallery",
	component: ImageGallery,
};

const Template = args => <ImageGallery {...args} />;

export const Example = Template.bind({});
Example.args = {
	share: true,
	fullScreen: true,
	zoom: true,
	images: [
		{
			id: "2",
			original: "https://images.wallpaperscraft.ru/image/kosmonavt_koltso_neon_156673_1920x1080.jpg",
			thumbnail: "https://images.wallpaperscraft.ru/image/kosmonavt_koltso_neon_156673_1920x1080.jpg",
			width: 1920,
			height: 1080,
			className: "w-3/6",
		},
		{
			id: "21",
			original: "https://placekitten.com/1024/768?image=1",
			thumbnail: "https://placekitten.com/80/60?image=1",
			width: 1024,
			height: 768,
		},
		{
			id: "22",
			original: "https://placekitten.com/1024/768?image=1",
			thumbnail: "https://placekitten.com/80/60?image=1",
			width: 1024,
			height: 768,
		},
		{
			id: "23",
			original: "https://placekitten.com/1024/768?image=1",
			thumbnail: "https://placekitten.com/1024/768?image=1",
			width: 1024,
			height: 768,
		},
		{
			id: "24",
			original: "https://placekitten.com/1024/768?image=1",
			thumbnail: "https://placekitten.com/1024/768?image=1",
			width: 1024,
			height: 768,
		},
		{
			id: "25",
			original: "https://placekitten.com/1024/768?image=1",
			thumbnail: "https://placekitten.com/1024/768?image=1",
			width: 1024,
			height: 768,
		},
		{
			id: "29",
			original: "https://placekitten.com/1024/768?image=1",
			thumbnail: "https://placekitten.com/1024/768?image=1",
			width: 1024,
			height: 768,
		},
		{
			id: "44",
			original: "https://placekitten.com/1024/768?image=1",
			thumbnail: "https://placekitten.com/1024/768?image=1",
			width: 1024,
			height: 768,
		},
	],
};
