import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function LoadMore({ loadMore }) {
	return (
		<button onClick={loadMore} className={"flex px-4 py-2 border border-solid border-gray-300 mr-8 items-center"}>
			<Fragment>
				<div className={"flex items-center"}>
					<span> Load more </span>
				</div>
			</Fragment>
		</button>
	);
}

LoadMore.propTypes = {
	loadMore: PropTypes.func,
};

LoadMore.defaultProp = {
	loadMore: () => {},
};
