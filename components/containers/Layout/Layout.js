import Header from "./Header";
import Footer from "./Footer";
import Backtop from "../../elements/BackTop";
import Login from "../Section/Authorization/Login";
import Register from "../Section/Authorization/Register";

export default function Layout({ children }) {
	return (
		<div className={"layout"}>
			<Header />
			<Login />
			<Register/>
			<Backtop />
			{children}
			<Footer />
		</div>
	);
}
