import { render, screen, waitFor } from "../../../testing-library-utils";
import { cleanup, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import details from "../../../../../src/Pages/detailsPage/detailsPage";

describe.skip("Given component", () => {
    describe("when rendered", () => {
        it("displays correctly", () => {
            const { getByText } = render(<details />);
            const GBF = getByText("Google Books Finder");
            expect(GBF).toBeInTheDocument();
        });
    });
});
