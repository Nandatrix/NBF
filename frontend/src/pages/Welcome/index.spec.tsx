import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Welcome } from ".";

describe("Welcome component", () => {
	it("shoud be able to render a logo on the screen", () => {
		const { getByAltText } = render(<Welcome />, { wrapper: Router });

		expect(getByAltText("NBF logo")).toBeInTheDocument();
	});

	it("should be have a href to others pages", async () => {
		const { getAllByRole } = render(<Welcome />, { wrapper: Router });

		const links = getAllByRole("link");

		expect(links[0]).toHaveAttribute("href", "/dashboard");
		expect(links[1]).toHaveAttribute("href", "/register/driver");
	});
});
