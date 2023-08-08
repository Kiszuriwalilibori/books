import { render } from '../../../../../testing-library-utils';
import userEvent from '@testing-library/user-event';
import { cleanup, waitFor } from '@testing-library/react';
import { ToFavoritesButton } from '../../../../../../../src/Pages/Books/Parts/cells/buttons/AddToFavoritesButton';

const mockID = 'mockID';

beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe('Given ShowFullInfoButton component', () => {
    describe('when clicked', () => {
        const mockthunkAddToFavorites = jest.fn();
        it('calls thunkAddToFavorites once with proper ID argument', async () => {
            render(<ToFavoritesButton id={mockID} thunkAddBookToFavorites={mockthunkAddToFavorites} />);
            const Button = document.querySelector(`[aria-label=${'addToFavorites'}]`);

            userEvent.click(Button as Element);

            await waitFor(() => {
                expect(mockthunkAddToFavorites).toBeCalledTimes(1);
                expect(mockthunkAddToFavorites).toBeCalledWith(
                    expect.objectContaining({
                        id: mockID,
                    }),
                );
            });
        });
    });
});
