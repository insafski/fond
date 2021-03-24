import React, { useRef } from "react";
import PropTypes from "prop-types";
import { CustomGallery, DefaultLayout } from "react-photoswipe-gallery";
import PhotoswipeUIDefault from "photoswipe/dist/photoswipe-ui-default";
import uniqueId from "lodash/uniqueId";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import GalleryItem from "@/components/elements/ListElement/GalleryItem";

export default function ImageGallery({ id, images, share, zoom, fullScreen }) {
	const layoutRef = useRef();

	return (
		<>
			<CustomGallery ui={PhotoswipeUIDefault} layoutRef={layoutRef} id={id}>
				<div className={"image-gallery flex py-4 flex-wrap"}>
					{
						images.map(({ original, thumbnail, width, height, title, id, className }) =>
							<GalleryItem
								key={id}
								original={original}
								thumbnail={thumbnail}
								width={width}
								height={height}
								title={title}
								id={id}
								className={className}
							/>,
						)
					}
				</div>
			</CustomGallery>
			<DefaultLayout
				shareButton={share}
				fullscreenButton={fullScreen}
				zoomButton={zoom}
				ref={layoutRef}
			/>
		</>
	);
}

ImageGallery.propTypes = {
	id: PropTypes.string,
	images: PropTypes.array,
	share: PropTypes.bool,
	zoom: PropTypes.bool,
	fullScreen: PropTypes.bool,
};

ImageGallery.defaultProps = {
	id: uniqueId(),
	images: [],
	share: false,
	zoom: false,
	fullScreen: false,
};
