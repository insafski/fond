import React from "react";
import PropTypes from "prop-types";

import Modal from "@/components/containers/Modal";

export default function SearchModal({
	mousePosition,
	isVisible,
	searchValue,
	closeSearchModal,
	changeSearchForm,
}) {
	return (
		<Modal
			title={"Search"}
			visible={isVisible}
			onClose={closeSearchModal}
			wrapClassName={"center"}
			style={{
				width: 600,
			}}
			mousePosition={mousePosition}
		>
			<input placeholder="search" onChange={event => changeSearchForm(event)} />
			<span>{searchValue}</span>
		</Modal>
	);
}

SearchModal.propTypes = {
	isVisible: PropTypes.bool,
	openSearchModal: PropTypes.func,
	mousePosition: PropTypes.object,
	closeSearchModal: PropTypes.func,
	searchValue: PropTypes.string,
	changeSearchForm: PropTypes.func,
};

SearchModal.defaultProps = {
	isVisible: false,
	openSearchModal: () => Function,
	mousePosition: {
		x: null,
		y: null,
	},
	closeSearchModal: () => Function,
	searchValue: "",
	changeSearchForm: () => Function,
};
