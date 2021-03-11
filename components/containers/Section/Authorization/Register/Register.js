import Dialog from "rc-dialog";
import { register } from "react-scroll/modules/mixins/scroller";

import { useAppContext } from "../../../../../utils/contextProvider";

export default function Register() {

	const { state, dispatch } = useAppContext();

	return (
		<>
			<Dialog title={"register"} visible={state.registerForm} onClose={() => dispatch({ type: "register" })}>
				<p>Register</p>
			</Dialog>
		</>
	);
}
