import React from "react";
import renderer from "react-test-renderer";

import BackTop from "..";

describe("BackTop", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<BackTop />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
