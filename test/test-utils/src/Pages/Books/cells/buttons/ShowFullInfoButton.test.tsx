import { render } from "../../../../../testing-library-utils";
import userEvent from "@testing-library/user-event";
import { cleanup, act, waitFor } from "@testing-library/react";
import { FullInfoButton } from "../../../../../../../src/Pages/Books/Parts/cells/buttons/ShowFullInfoButton";

const mockID = "mockID";

jest.mock("../../../../../../../src/js/redux/thunks/thunkFetchdetails.ts", () => jest.fn());

beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
});
describe("Given ShowFullInfoButton component", () => {
    describe("when clicked", () => {
        it("calls expected callback once with expected arguments", async () => {
            const mockthunkFetchdetails = jest.fn();
            render(<FullInfoButton id={mockID} thunkFetchdetails={mockthunkFetchdetails} />);
            const showFullInfoButton = document.querySelector(`[aria-label=${"showFullInfo"}]`);

            userEvent.click(showFullInfoButton as Element);

            await waitFor(() => {
                expect(mockthunkFetchdetails).toBeCalledTimes(1);
                expect(mockthunkFetchdetails).toBeCalledWith(
                    expect.objectContaining({
                        id: mockID,
                    })
                );
            });
        });
    });
});
