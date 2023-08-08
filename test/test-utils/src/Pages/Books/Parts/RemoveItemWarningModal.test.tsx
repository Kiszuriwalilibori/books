import React from "react";
import "@testing-library/react";
import { render, screen, waitFor } from "../../../../testing-library-utils";
import userEvent from "@testing-library/user-event";
import RemoveItemWarningModal from "../../../../../../src/Pages/Books/Parts/RemoveItemWarningModal";
import { RemoveBookModalVisibilityContext } from "../../../../../../src/Contexts/RemoveBookModalVisibilityContext";
import { cleanup, act } from "@testing-library/react";

const testOpen = jest.fn();
const testClose = jest.fn();

jest.mock("../../../../../../src/hooks/useDispatchAction.ts", () => () => actions);
const actions = {
  removeBook: jest.fn(),
};
let dummyElement = document.createElement("div");
beforeEach(() => {
  cleanup();
});

afterEach(() => {
  cleanup();
});

describe("Given ThisModal component", () => {
  describe("when render within context with prop isVisible: true", () => {
    it("displays modal", () => {
      const { getByRole, getAllByRole, queryByRole } = render(
        <RemoveBookModalVisibilityContext.Provider value={{ isVisible: true, openModal: testOpen, closeModal: testClose, target: null }}>
          <RemoveItemWarningModal />
        </RemoveBookModalVisibilityContext.Provider>
      );
      const dialog = getByRole("dialog");
      expect(dialog).toBeInTheDocument();
      const buttons = getAllByRole("button");
      expect(buttons).toHaveLength(2);
    });
  });
  describe("when render within context with prop isVisible: false", () => {
    it("does NOT display modal", () => {
      const { getByRole, queryByRole, queryAllByRole } = render(
        <RemoveBookModalVisibilityContext.Provider value={{ isVisible: false, openModal: testOpen, closeModal: testClose, target: null }}>
          <RemoveItemWarningModal />
        </RemoveBookModalVisibilityContext.Provider>
      );
      const dialog = queryByRole("dialog");
      expect(dialog).toBeNull();
      const buttons = queryAllByRole("button");
      expect(buttons).toHaveLength(0);
    });
  });
  describe("when is visible, target prop is falsey and button Usuń is clicked", () => {
    it("calls closeModal function once and NOT calls remove function", async () => {
      const { getByRole, getAllByRole, getByText } = render(
        <RemoveBookModalVisibilityContext.Provider value={{ isVisible: true, openModal: testOpen, closeModal: testClose, target: null }}>
          <RemoveItemWarningModal />
        </RemoveBookModalVisibilityContext.Provider>
      );
      const dialog = getByRole("dialog");
      expect(dialog).toBeInTheDocument();
      const buttons = getAllByRole("button");
      expect(buttons).toHaveLength(2);
      const removeButton = screen.getByText(`Usuń`);
      expect(removeButton).toBeInTheDocument();
      userEvent.click(removeButton);
      await waitFor(() => expect(actions.removeBook).not.toBeCalled());
      await waitFor(() => expect(testClose).toBeCalledTimes(1));
    });
  });

  describe("when is visible, target prop is truthy and button Usuń is clicked", () => {
    it("calls closeModal function once and calls remove function with expected props", async () => {
      const { getByRole, getAllByRole, getByText } = render(
        <RemoveBookModalVisibilityContext.Provider
          value={{
            isVisible: true,
            openModal: testOpen,
            closeModal: testClose,
            target: dummyElement,
          }}
        >
          <RemoveItemWarningModal />
        </RemoveBookModalVisibilityContext.Provider>
      );
      const dialog = getByRole("dialog");
      expect(dialog).toBeInTheDocument();
      const buttons = getAllByRole("button");
      expect(buttons).toHaveLength(2);
      const removeButton = screen.getByText(`Usuń`);
      expect(removeButton).toBeInTheDocument();
      userEvent.click(removeButton);
      await waitFor(() => expect(actions.removeBook).toBeCalledTimes(1));
      await waitFor(() => expect(actions.removeBook).toBeCalledWith(dummyElement));
      await waitFor(() => expect(testClose).toBeCalled());
    });
  });
});
