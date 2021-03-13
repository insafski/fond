import { Function } from "core-js";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';

export default function LinkMaker({children, href, locale}) {
	const router = useRouter();

	return (
		<Link href={`${href}`} locale={!!locale ? locale : router.locale}>
			{children}
		</Link>
	);
}

LinkMaker.propTypes = {
	children: PropTypes.Function,
	href: PropTypes.string,
	locale: PropTypes.string
}

LinkMaker.defaultProps = {
	children: () => Function,
	href: "/",
	locale: ""
}
