import React, { useState } from "react";
import PropTypes from "prop-types";
import { useToggle } from "ahooks";

import Modal from "@/components/containers/Modal";
import { AuthContextProvider } from "../context";

export default function AuthProvider({ children }) {
	const [isOpen, { toggle }] = useToggle();
	const [auth, { toggle: toggleAuth }] = useToggle();
	const [mousePosition, setMousePosition] = useState({
		x: null,
		y: null,
	});

	function handleClose() {
		toggle(false);
	}

	function handleOpen(event) {
		setMousePosition({
			x: event.pageX,
			y: event.pageY,
		});
		toggle(true);
	}

	return (
		<AuthContextProvider
			value={{
				isOpen,
				toggle,
				handleClose,
				handleOpen,
			}}
		>
			<Modal
				title={"Авторизация"}
				visible={auth}
				onClose={handleClose}
				mousePosition={mousePosition}
				wrapClassName={"center"}
				style={{
					width: 600,
				}}
			></Modal>
			<Modal
				title={"Регистрация"}
				visible={isOpen}
				onClose={handleClose}
				mousePosition={mousePosition}
				wrapClassName={"center"}
				style={{
					width: 600,
				}}
			></Modal>
			{children}
		</AuthContextProvider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.node,
};
