import React from "react";
import renderer from "react-test-renderer";

import Link from "..";

describe("Link", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<Link href={"/"}>
				Ссылка на страницу
			</Link>)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
