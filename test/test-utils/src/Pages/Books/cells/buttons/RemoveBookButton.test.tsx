import { render } from '../../../../../testing-library-utils';
import userEvent from '@testing-library/user-event';
import { cleanup, waitFor } from '@testing-library/react';
import RemoveBookButton from '../../../../../../../src/Pages/Books/Parts/cells/buttons/RemoveBookButton';
import { RemoveBookModalVisibilityContext } from '../../../../../../../src/Contexts/RemoveBookModalVisibilityContext';

const actions = {
    removeBook: jest.fn(),
};
beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
});

jest.mock('../../../../../../../src/hooks/useDispatchAction.ts', () => () => actions);
const mockOpenModal = jest.fn();
const mockCloseModal = jest.fn();
const mockID = 'mockID';
describe('Given RemoveBookButton component', () => {
    describe('when clicked', () => {
        it('calls openModal method once', async () => {
            const { getByRole } = render(
                <RemoveBookModalVisibilityContext.Provider
                    value={{ openModal: mockOpenModal, closeModal: mockCloseModal, isVisible: false }}
                >
                    <RemoveBookButton id={mockID} />
                </RemoveBookModalVisibilityContext.Provider>,
            );
            const button = getByRole('button');
            expect(button).toBeInTheDocument();
            userEvent.click(button as Element);
            await waitFor(() => {
                expect(mockOpenModal).toBeCalledTimes(1);
            });
        });
    });
});
