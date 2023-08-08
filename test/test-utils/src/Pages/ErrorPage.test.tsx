import { LocalErrorPage } from "../../../../src/Pages/ErrorPage";

import { cleanup, act } from "@testing-library/react";
import * as reactRedux from "react-redux";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import React from "react";

beforeEach(() => {
    cleanup();
});

jest.mock("../../../../src/hooks/useTypedSelector", () => ({
    useTypedSelector: jest.fn() /*.mockReturnValue('')*/,
}));

describe("Given ErrorPage component", () => {
    describe("when rendered", () => {
        it("should display correct error message", () => {
            // Najpierw sami importujemy zmockowany moduł i funkcję useTypedSelector z niego.
            const { useTypedSelector } = require("../../../../src/hooks/useTypedSelector");
            const message = "This is some nasty error!";
            // Następnie zmuszamy ją do zwrócenia konkretnej, spodziewanej wartości.
            // Zwróć uwagę na .mockReturnValueOnce() - sprawi, że działanie mocka
            // ulegnie zmianie tylko ten jeden raz, w tym konkretnym teście.
            (useTypedSelector as jest.Mock).mockReturnValueOnce(message);
            render(<LocalErrorPage />);
            const error = screen.getByText(message);
            expect(error).toBeInTheDocument();
        });
    });
});

//
// Ale tak naprawdę nie powinniśmy mockować useTypedSelector bo tak naprawdę on nie jest "nasz" :)
// To jest przecież zwykły useSelector z reduxa! A errorMessage bierzemy z reduxowego stanu!
//A jeżeli bawimy się z reduxem, to powinniśmy zmockować stan i najzwyczajniej w świecie
//pozwolić reduxowi robić jego robotę.

describe("Given ErrorPage component", () => {
    describe("when rendered", () => {
        it("should display correct error message from state", () => {
            const errorMessage = "This is some nasty error!";
            const initialState = { books: { errorMessage } };
            const store = createStore((state: unknown) => state, initialState);

            render(
                <Provider store={store}>
                    <LocalErrorPage />
                </Provider>
            );

            const error = screen.queryByText(errorMessage);
            expect(error).toBeInTheDocument();
        });
    });
});
