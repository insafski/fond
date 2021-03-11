import Dialog from "rc-dialog";
import get from "lodash/get";

import { useAppContext } from "../../../../../utils/contextProvider";

export default function Login() {

	const { state, dispatch } = useAppContext();

	return (
		<>
			<Dialog title={"login"} visible={get(state, "loginForm", false)} onClose={() => dispatch({type: "login"})}>
				<p>Login</p>
			</Dialog>
		</>
	);
}
