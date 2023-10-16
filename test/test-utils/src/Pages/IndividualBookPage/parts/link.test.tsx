import { render } from "../../../../testing-library-utils";
import Link from "../../../../../../src/Pages/detailsPage/parts/link";

const mockNode = "testString";
const mockLabel = "testLabel";

describe("Given Title component", () => {
    describe("when rendered with given props", () => {
        it("displays element of correct type", () => {
            render(<Link node={mockNode} label={mockLabel} />);
            const link = document.querySelector("a");
            expect(link).toBeInTheDocument();
        });
        it("displays element with correct class", () => {
            render(<Link node={mockNode} label={mockLabel} />);
            const link = document.querySelector(".details__link");
            expect(link).toBeInTheDocument();
        });
        it("displays element with correct test content", () => {
            const { getByText } = render(<Link node={mockNode} label={mockLabel} />);
            const link = getByText(mockLabel);
            expect(link).toBeInTheDocument();
        });

        it("has href with proper content", () => {
            const { getByText } = render(<Link node={mockNode} label={mockLabel} />);
            const link = getByText(mockLabel);
            expect(link).toHaveAttribute("href", mockNode);
        });
    });
});
