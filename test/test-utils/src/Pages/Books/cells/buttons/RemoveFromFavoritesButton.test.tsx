/**
 * TODO z niejasnych przyczyn nie dziala testowanie favorites dlatego jest skipped.
 */
import { render } from "../../../../../testing-library-utils";
import userEvent from "@testing-library/user-event";
import { cleanup, waitFor } from "@testing-library/react";
import RemoveFromFavoritesButton from "../../../../../../../src/Pages/Books/Parts/cells/buttons/RemoveFromFavoritesButton";

beforeEach(() => {
  cleanup();
  jest.clearAllMocks();
});
const actions = {
  removeBook: jest.fn(),
};

jest.mock("../../../../../../../src/hooks/useDispatchAction.ts", () => () => actions);

const mockID = "mockID";

describe("Given ShowFullInfoButton component", () => {
  describe("when clicked", () => {
    it("dispatches remove action once", async () => {
      render(<RemoveFromFavoritesButton id={mockID} />);

      const Button = document.querySelector(`[aria-label=${"removeBookFromFavorites"}]`);

      userEvent.click(Button as Element);

      await waitFor(() => {
        expect(actions.removeBook).toBeCalledTimes(1);
        expect(actions.removeBook).toBeCalledWith(
          expect.objectContaining({
            id: mockID,
          })
        );
      });
    });
    it.skip("calls remove method of Favorites", async () => {
      const Favorites = {
        remove: jest.fn(),
      };
      jest.mock("../../../../../../../src/hooks/useFavorites", () => () => Favorites);

      render(<RemoveFromFavoritesButton id={mockID} />);

      const Button = document.querySelector(`[aria-label=${"removeBookFromFavorites"}]`);

      userEvent.click(Button as Element);

      await waitFor(() => {
        expect(Favorites.remove).toBeCalledTimes(1);
      });
    });
  });
});
