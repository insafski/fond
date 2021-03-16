import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";
import Backtop from "@/components/elements/BackTop";
import { AuthProvider } from "@/components/widgets/Auth";

export default function Layout({ children }) {
	return (
		<main className={"layout"}>
			<AuthProvider>
				<Header />
				{children}
				<Footer />
			</AuthProvider>
			<Backtop />
		</main>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};
