import React from "react";
import PropTypes from "prop-types";
import { Item } from "react-photoswipe-gallery";
import cx from "classnames";

export default function GalleryItem({ original, thumbnail, width, height, title, id, className }) {
	return (
		<div className={cx("photo p-2", className ? className : "w-1/4")}>
			<Item
				original={original}
				thumbnail={thumbnail}
				width={width}
				height={height}
				id={id}
			>
				{
					({ ref, open }) => {
						return (
							<img
								className={"w-full"}
								ref={ref}
								onClick={open}
								src={thumbnail}
								alt={title}
								title={title}
							/>
						);
					}
				}
			</Item>
		</div>
	);
}

GalleryItem.propTypes = {
	original: PropTypes.string,
	thumbnail: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	title: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
};

GalleryItem.defaultProps = {
	original: "",
	thumbnail: "",
	width: 0,
	height: 0,
	title: "",
	id: "",
	className: "",
};

GalleryItem.displayName = "GalleryItem";
