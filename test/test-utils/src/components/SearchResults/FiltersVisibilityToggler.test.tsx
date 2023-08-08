//import { render, screen } from '../../../testing-library-utils';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FiltersVisibilityToggler from '../../../../../src/components/SearchResults/FiltersVisibilityToggler';
import { FiltersVisibilityContext } from '../../../../../src/Contexts/FiltersVisibilityContext';

const testClass = 'button-long';
const testText = 'Ukryj/pokaż filtry';

const mockToggler = jest.fn();

describe('Given FiltersVisibilityToggler component', () => {
    describe('when called with given props', () => {
        it('renders correctly role, class and text', () => {
            const { getByRole, getByText } = render(<FiltersVisibilityToggler />);
            const button = getByRole('button');
            //check button to be displayed at all
            expect(button).toBeInTheDocument();
            const buttonClass = document.querySelector(`.${testClass}`);
            // check button has proper class
            expect(buttonClass).toBeInTheDocument();
            const buttonText = getByText(testText);
            //checks button displays proper text
            expect(buttonText).toBeInTheDocument();
        });
    });
    describe('Given Toggler component', () => {
        describe('when called within FiltersVisibilityContextProvider', () => {
            it('renders correctly role, class and text and executes function call when clicked', async () => {
                const { getByRole, getByText } = render(
                    <FiltersVisibilityContext.Provider
                        value={{ toggleFiltersVisibility: mockToggler, areFiltersVisible: true }}
                    >
                        <FiltersVisibilityToggler />
                    </FiltersVisibilityContext.Provider>,
                );
                const button = getByRole('button');
                //check button to be displayed at all
                expect(button).toBeInTheDocument();
                const buttonClass = document.querySelector(`.${testClass}`);
                // check button has proper class
                expect(buttonClass).toBeInTheDocument();
                const buttonText = getByText(testText);
                //checks button displays proper text
                expect(buttonText).toBeInTheDocument();
                userEvent.click(buttonText);
                await waitFor(() => {
                    expect(mockToggler).toBeCalledTimes(1);
                });
            });
        });
    });
    // describe('when called with given props', () => {
    //     it('check for function', () => {
    //         const customRender = (ui, { providerProps, ...renderOptions }) => {
    //             return render(
    //                 <FiltersVisibility.Provider {...providerProps}>{ui}</FiltersVisibility.Provider>,
    //                 renderOptions,
    //             );
    //         };

    //         const providerProps = {
    //             value: toggleFiltersVisibility,
    //         };

    //         customRender(<FiltersVisibilityToggler />, { providerProps });
    //         const button = getByRole('button');
    //         userEvent.click(button);
    //         expect(toggleFiltersVisibility).toBeCalledTimes(1);
    //     });
    // });
});
