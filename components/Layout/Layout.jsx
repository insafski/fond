import React from "react";
import PropTypes from "prop-types";

import Backtop from "@/components/elements/BackTop";
import { AuthProvider } from "@/components/widgets/Auth";
import { SearchProvider } from "@/components/widgets/Search";
import BreadcrumbsBar from "@/components/Layout/Bars/BreadcrumbsBar";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<main className={"layout"}>
			<AuthProvider>
				<SearchProvider>
					<Header />
					<BreadcrumbsBar />
					{children}
					<Footer />
				</SearchProvider>
			</AuthProvider>
			<Backtop />
		</main>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};
