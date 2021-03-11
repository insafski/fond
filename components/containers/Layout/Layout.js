import Header from "./Header";
import Footer from "./Footer";
import Backtop from "../../elements/BackTop";

export default function Layout({ children }) {
	return (
		<div className={"layout"}>
			<Header />
			<Backtop />
			{children}
			<Footer />
		</div>
	);
}
