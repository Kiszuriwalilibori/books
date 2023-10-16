import { render } from "../../../../testing-library-utils";
import Title from "../../../../../../src/Pages/detailsPage/parts/title";

const mockNode = "testString";

describe("Given Title component", () => {
    describe("when rendered with given props", () => {
        it("displays element of correct type", () => {
            render(<Title node={mockNode} />);
            const title = document.querySelector("h1");
            expect(title).toBeInTheDocument();
        });
        it("displays element with correct class", () => {
            render(<Title node={mockNode} />);
            const title = document.querySelector(".details__title");
            expect(title).toBeInTheDocument();
        });
        it("displays element with correct test content", () => {
            const { getByText } = render(<Title node={mockNode} />);
            const title = getByText(mockNode);
            expect(title).toBeInTheDocument();
        });
    });
});
