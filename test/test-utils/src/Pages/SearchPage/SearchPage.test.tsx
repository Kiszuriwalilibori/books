// /**
//  *
//  */
// import React from 'react';
// import LocalSearchPage from '../../../../../src/Pages/SearchPage/SearchPage';
// import Paths from '../../../../../src/Routing/Paths';
// import { render, screen, waitFor } from '../../../testing-library-utils';
// import { cleanup, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import ReactRouterDom from 'react-router-dom';
// import { initialValidated } from '../../../../../src/Pages/SearchPage/constants';
// import { thunkFetchFromFavorites } from '../../../../../src/redux/thunks/thunkFetchFromFavorites';

// const buttonTexts = ['Szukaj', 'Wyczyść', 'Ulubione'];
// const inputButtonTexts = ['Szukaj', 'Wyczyść'];
// const inputIds = ['authors', 'title', 'subject'];
// const falseValidateInput = { valid: false, message: 'MockErrorText' };
// const trueValidateInput = { valid: true, message: '' };

// beforeEach(() => {
//     cleanup();
// });

// afterEach(() => {
//     jest.clearAllMocks();
// });

// jest.mock('../../../../../src/Pages/SearchPage/scripts/validateInput.ts', () =>
//     jest.fn().mockReturnValue(undefined),
// );

// jest.mock('../../../../../src/Pages/SearchPage/scripts/createFullPathToAPI.ts', () =>
//     jest.fn().mockReturnValue('https://FullPathToAPI'),
// );

// const fetchBooksFromAPI: jest.Mock = jest.fn();
// jest.mock('../../../../../src/js/fetchBooksFromAPI.ts', () => (arg: any) => fetchBooksFromAPI(arg));

// const mockHistory = {
//     push: jest.fn(),
// };

// jest.mock('react-router-dom', () => ({
//     ...(jest.requireActual('react-router-dom') as typeof ReactRouterDom),
//     useNavigate: jest.fn(() => mockHistory),
// }));

// const setStateMock = jest.fn();
// const useStateMock: any = (useState: any) => [useState, setStateMock];
// jest.spyOn(React, 'useState').mockImplementation(useStateMock);

// describe('Given Search page component', () => {
//     describe('when rendered', () => {
//         it('displays correctly its elements', () => {
//             const { getByText, getByRole, getAllByRole } = render(<LocalSearchPage />);
//             //displays banner
//             const banner = getByRole('banner');
//             expect(banner).toBeInTheDocument();
//             // displays form
//             const form = document.getElementById('search__form');
//             expect(form).toBeInTheDocument();
//             // displays correct number of inputs
//             const inputs = getAllByRole('textbox');
//             expect(inputs).toHaveLength(3);
//             //displays inputs with correct text
//             inputIds.forEach(item => {
//                 const withText = document.getElementById(item);
//                 expect(withText).toBeInTheDocument();
//             });

//             // displays correct number of buttons
//             const buttons = getAllByRole('button');
//             expect(buttons).toHaveLength(3);
//             //displays correct button titles
//             buttonTexts.forEach(item => {
//                 const withText = getByText(item);
//                 expect(withText).toBeInTheDocument();
//             });
//             buttonTexts.forEach(item => {
//                 const withText = getByText(item);
//                 expect(withText).toHaveClass('button--inactive');
//             });
//         });
//     });
//     describe('when text is typed in inputs', () => {
//         inputIds.forEach(item => {
//             it('displays typed text and both Szukaj and Wyczyść buttons become active while Ulubione button remains inactive', async () => {
//                 const { getByText, getByRole, getAllByRole } = render(<LocalSearchPage />);
//                 const withText = document.getElementById(item);
//                 userEvent.type(withText as HTMLElement, 'Hello World');
//                 await waitFor(() => {
//                     expect(withText).toHaveValue('Hello World');
//                     const szukaj = getByText('Szukaj');
//                     expect(szukaj).toHaveClass('button--ok');
//                     const wyczysc = getByText('Wyczyść');
//                     expect(wyczysc).toHaveClass('button--problem');
//                     const ulubione = getByText('Ulubione');
//                     expect(ulubione).toHaveClass('button--inactive');
//                 });
//             });
//         });
//     });

//     describe('when cursor enters input field', () => {
//         inputIds.forEach(item => {
//             it('this input field receives focus', async () => {
//                 const { getByText, getByRole, getAllByRole, queryByText, findByText } = render(
//                     <LocalSearchPage />,
//                 );
//                 const withText = document.getElementById(item);
//                 act(() => {
//                     userEvent.hover(withText as HTMLElement);
//                 });
//                 await waitFor(() => {
//                     expect(withText).toHaveFocus();
//                 });
//             });
//         });
//     });

//     describe('when inputs data is validated as correct and user presses Szukaj button', () => {
//         inputIds.forEach(inputID => {
//             it('fetching function is called once and with propper arg,setState is called with proper value', async () => {
//                 const { getByText, getByRole, queryByRole, getAllByRole, queryByText } = render(
//                     <LocalSearchPage />,
//                 );
//                 const validateInput = require('../../../../../src/Pages/SearchPage/scripts/validateInput');
//                 validateInput.mockReturnValue(trueValidateInput);

//                 const input = document.getElementById(inputID);
//                 userEvent.type(input as HTMLElement, '%');
//                 const submitButton = getByText('Szukaj');
//                 userEvent.click(submitButton);

//                 await waitFor(() => {
//                     expect(setStateMock).toBeCalledWith(
//                         expect.objectContaining({
//                             valid: true,
//                         }),
//                     );
//                     expect(fetchBooksFromAPI).toHaveBeenCalledTimes(1);
//                     expect(fetchBooksFromAPI).toBeCalledWith('https://FullPathToAPI');
//                     // const alert = queryByRole('alert');
//                     // expect(alert).toBeNull();
//                     expect(mockHistory.push).toBeCalledTimes(1);
//                     expect(mockHistory.push).toBeCalledWith(Paths.connecting);
//                 });
//             });
//         });
//     });

//     describe('when input data is not validated and Szukaj button is clicked', () => {
//         inputIds.forEach(inputID => {
//             it('fetching function is NOT called, state is set with correct value', async () => {
//                 const {
//                     getByText,
//                     queryByRole,
//                     getByRole,
//                     getAllByRole,
//                     queryByText,
//                     findByText,
//                     findByRole,
//                 } = render(<LocalSearchPage />);
//                 const validateInput = require('../../../../../src/Pages/SearchPage/scripts/validateInput');
//                 validateInput.mockReturnValue(falseValidateInput);
//                 const input = document.getElementById(inputID);
//                 userEvent.type(input as HTMLElement, 'Hello');
//                 const submitButton = getByText('Szukaj');
//                 userEvent.click(submitButton);

//                 await waitFor(() => {
//                     expect(setStateMock).toBeCalledWith(
//                         expect.objectContaining({
//                             valid: false,
//                         }),
//                     );
//                     expect(fetchBooksFromAPI).not.toBeCalled();
//                     // const alert = getByRole('alert');
//                     // expect(alert).toBeInTheDocument();
//                     // const alertText = getByText('MockErrorText');
//                     // expect(alertText).toBeInTheDocument();
//                 });
//             });
//         });
//     });
//     describe('when some text is typed into inputs and reset button is clicked', () => {
//         inputIds.forEach(inputID => {
//             it('resets state and the input text disappears', async () => {
//                 const {
//                     getByText,
//                     queryByRole,
//                     getByRole,
//                     getAllByRole,
//                     queryByText,
//                     findByText,
//                     findByRole,
//                 } = render(<LocalSearchPage />);

//                 const input = document.getElementById(inputID) as HTMLInputElement;
//                 userEvent.type(input as HTMLElement, 'Hello');
//                 const resetButton = getByText('Wyczyść');
//                 userEvent.click(resetButton);
//                 console.log(process.env.NODE_ENV, 'environmental');
//                 await waitFor(() => {
//                     expect(setStateMock).toBeCalledWith(initialValidated);
//                     const hello = queryByText('Hello');
//                     expect(hello).toBeNull();
//                     expect(input.textContent).toBe('');
//                 });
//             });
//         });
//     });

//     describe('when some text is typed into inputs and Ulubione button is clicked', () => {
//         const Favorites = {
//             containsBooks: jest.fn().mockReturnValue(true),
//         };
//         jest.mock('../../../../../src/hooks/useFavorites', () => () => Favorites);
//         const thunkFetchFromFavorites: jest.Mock = jest.fn();
//         jest.mock('../../../../../src/redux/thunks/thunkFetchFromFavorites', thunkFetchFromFavorites);

//         inputIds.forEach(inputID => {
//             it('calls thunkFetchFromFavorites function and redirects to /books ', () => {
//                 act(async () => {
//                     const { getByText } = render(<LocalSearchPage />);
//                     const input = document.getElementById(inputID) as HTMLInputElement;
//                     userEvent.type(input as HTMLElement, 'Hello');
//                     const favoritesButton = getByText('Ulubione');
//                     userEvent.click(favoritesButton);

//                     await waitFor(() => {
//                         expect(favoritesButton).toHaveClass('button--favorites');
//                         expect(thunkFetchFromFavorites).toBeCalledTimes(1);
//                         expect(global.window.location.href).toContain('/books');
//                     });
//                 });
//             });
//         });
//     });
// });

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchPageField, searchPageFieldPlaceholderMap } from '../../../../../src/Pages/SearchPage/model';
import { LocalSearchPage } from '../../../../../src/Pages/SearchPage/SearchPage';
import { initialValidationState } from '../../../../../src/Pages/SearchPage/model';
import { renderWithHistory } from '../../../testing-library-utils';
import Paths from '../../../../../src/Routing/Paths';

jest.mock('../../../../../src/Pages/SearchPage/parts/FavoritesButton', () => () => <button>Mock</button>);

jest.mock('../../../../../src/Pages/SearchPage/scripts/validateInput', () => jest.fn());

jest.mock('../../../../../src/js/fetchBooksFromAPI', () => jest.fn());

const fieldLabels = Object.values(SearchPageField).map(
    (fieldName: SearchPageField) => searchPageFieldPlaceholderMap[fieldName],
);

describe('Given SearchPage component', () => {
    beforeAll(() => {
        const validateInput = require('../../../../../src/Pages/SearchPage/scripts/validateInput');

        (validateInput as jest.SpyInstance).mockReturnValue(initialValidationState);
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('when rendered', () => {
        it('should display correct input fields', () => {
            render(<LocalSearchPage />);

            fieldLabels.forEach((label: string) => {
                const field = screen.getByLabelText(label);

                expect(field).toBeInTheDocument();
            });
        });
    });

    describe('when all fields are empty', () => {
        it('should disable "Szukaj" button', () => {
            render(<LocalSearchPage />);

            const button = screen.getByText('Szukaj');

            expect(button).toBeDisabled();
        });

        it('should disable "Wyczyść" button', () => {
            render(<LocalSearchPage />);

            const button = screen.getByText('Wyczyść');

            expect(button).toBeDisabled();
        });
    });

    fieldLabels.forEach((label: string) => {
        describe(`when "${label}" field is not empty`, () => {
            it('should enable "Szukaj" button', async () => {
                render(<LocalSearchPage />);

                const field = screen.getByLabelText(label);

                act(() => {
                    userEvent.paste(field, 'Some text');
                });

                const button = await screen.findByText('Szukaj');

                expect(button).not.toBeDisabled();
            });

            it('should enable "Wyczyść" button', async () => {
                render(<LocalSearchPage />);

                const field = screen.getByLabelText(label);

                act(() => {
                    userEvent.paste(field, 'Some text');
                });

                const button = await screen.findByText('Wyczyść');

                expect(button).not.toBeDisabled();
            });
        });
    });

    describe('when the form is submitted', () => {
        describe('and validation passes', () => {
            it('should push "connecting" path to history', async () => {
                const { history } = renderWithHistory(<LocalSearchPage />);

                jest.spyOn(history, 'push').mockImplementation(() => null);

                const authorField = screen.getByLabelText(
                    searchPageFieldPlaceholderMap[SearchPageField.AUTHORS],
                );

                act(() => {
                    userEvent.paste(authorField, 'Isaac Asimov');
                });

                const submitButton = await screen.findByText('Szukaj');

                await act(async () => {
                    userEvent.click(submitButton);
                });

                expect(history.push).toHaveBeenCalledWith(Paths.connecting);
            });

            it('should fetch the list of books from API', async () => {
                const fetchBooksFromAPI = require('../../../../../src/js/fetchBooksFromAPI');

                renderWithHistory(<LocalSearchPage />);

                const authorField = screen.getByLabelText(
                    searchPageFieldPlaceholderMap[SearchPageField.AUTHORS],
                );

                const author = 'Isaac Asimov';

                act(() => {
                    userEvent.paste(authorField, author);
                });

                const submitButton = await screen.findByText('Szukaj');

                await act(async () => {
                    userEvent.click(submitButton);
                });

                expect(fetchBooksFromAPI).toHaveBeenCalledTimes(1);

                const [apiPath]: [string] = (fetchBooksFromAPI as jest.SpyInstance).mock.calls[0];

                expect(apiPath).toMatch(author);
            });
        });

        describe('and validation fails', () => {
            it('should display correct warning', async () => {
                const validateInput = require('../../../../../src/Pages/SearchPage/scripts/validateInput');
                const message = 'Invalid input!!!';

                (validateInput as jest.SpyInstance).mockReturnValueOnce({
                    valid: false,
                    message,
                });

                renderWithHistory(<LocalSearchPage />);

                const authorField = screen.getByLabelText(
                    searchPageFieldPlaceholderMap[SearchPageField.AUTHORS],
                );

                act(() => {
                    userEvent.paste(authorField, 'Isaac Asimov');
                });

                const submitButton = await screen.findByText('Szukaj');

                await act(async () => {
                    userEvent.click(submitButton);
                });

                expect(screen.queryByText(message)).not.toBeNull();
            });
        });
    });

    describe('when "Wyczyść" button is clicked', () => {
        it('should clear validation warning', async () => {
            const validateInput = require('../../../../../src/Pages/SearchPage/scripts/validateInput');
            const message = 'Invalid input!!!';

            (validateInput as jest.SpyInstance).mockReturnValueOnce({
                valid: false,
                message,
            });

            renderWithHistory(<LocalSearchPage />);

            const fieldValuesMap = {
                [SearchPageField.AUTHORS]: 'Frank Herbert',
                [SearchPageField.TITLE]: 'Dune',
                [SearchPageField.SUBJECT]: 'Science fiction',
            };

            act(() => {
                Object.values(SearchPageField).forEach((key: SearchPageField) => {
                    const field = screen.getByLabelText(searchPageFieldPlaceholderMap[key]);

                    userEvent.paste(field, fieldValuesMap[key]);
                });
            });

            const submitButton = await screen.findByText('Szukaj');

            await act(async () => {
                userEvent.click(submitButton);
            });

            expect(screen.queryByText(message)).not.toBeNull();

            const resetButton = await screen.findByText('Wyczyść');

            await act(async () => {
                userEvent.click(resetButton);
            });

            expect(screen.queryByText(message)).toBeNull();
        });

        it('should reset the form', async () => {
            render(<LocalSearchPage />);

            const fieldValuesMap = {
                [SearchPageField.AUTHORS]: 'Frank Herbert',
                [SearchPageField.TITLE]: 'Dune',
                [SearchPageField.SUBJECT]: 'Science fiction',
            };

            act(() => {
                Object.values(SearchPageField).forEach((key: SearchPageField) => {
                    const field = screen.getByLabelText(searchPageFieldPlaceholderMap[key]);

                    userEvent.paste(field, fieldValuesMap[key]);
                });
            });

            const resetButton = await screen.findByText('Wyczyść');

            await act(async () => {
                userEvent.click(resetButton);
            });

            const fieldValues = fieldLabels.map(
                (label: string) => (screen.getByLabelText(label) as HTMLInputElement).value,
            );

            expect(fieldValues).toEqual(['', '', '']);
        });
    });
});
