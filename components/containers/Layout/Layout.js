import Header from "./Header";
import Footer from "./Footer";
import BackTop from "../../elements/BackTop";

export default function Layout({ children }) {

	return (
		<div className={"layout"}>
			<Header />
			{children}
			<BackTop />
			<Footer />
		</div>
	);
}
