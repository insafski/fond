import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

export default function Link({ children, href, locale }) {
	const router = useRouter();

	return (
		<NextLink href={`${href}`} locale={locale ? locale : router.locale}>
			{children}
		</NextLink>
	);
}

Link.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string,
	locale: PropTypes.string,
};

Link.defaultProps = {
	children: null,
	href: "/",
	locale: "",
};
