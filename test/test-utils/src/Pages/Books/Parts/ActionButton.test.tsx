import { render, screen } from "../../../../testing-library-utils";
import RoundButton from "../../../../../../src/Pages/Books/Parts/cells/buttons/RoundButton";
import buttonData from "../../../../../../src/models/Buttons";
import { RoundButtons } from "../../../../../../src/models/Buttons";
const testID = "123456ABC";
const testType = "removeBook";

const testArray = ["removeBook", "addToFavorites", "showFullInfo", "removeBookFromFavorites", "goToShop"] as RoundButtons[];

describe("Given ButtonSmallGeneric component", () => {
  describe("when called with given props", () => {
    testArray.forEach(testType => {
      it("renders button with correct aria-label, itemprop, and data-content", () => {
        render(<RoundButton id={testID} type={testType} />);
        let button = document.querySelector(`[aria-label=${buttonData[testType].ariaLabel}]`);
        expect(button).toBeInTheDocument();
        button = document.querySelector(`[itemprop=${buttonData[testType].itemProp}]`);
        expect(button).toBeInTheDocument();
        button = document.querySelector(`[data-content="${testID}"]`);
        expect(button).toBeInTheDocument();
      });
    });
  });
});
