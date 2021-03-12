import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
import { useAppContext } from "../../../../utils/contextProvider";

export default function Authorization() {

	const { dispatch } = useAppContext();

	function onSelect({ key }) {
		dispatch({type: `${key}`})
	}

	const menu = (
		<Menu onSelect={onSelect} selectable={true}>
			<MenuItem key="login">
				Login
			</MenuItem>
			<Divider />
			<MenuItem key="register">
				Register
			</MenuItem>
		</Menu>
	);

	return (
		<>
			<Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
				<button style={{ width: 100 }}>open</button>
			</Dropdown>
		</>
	);
}
