import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
    FavoritesButtonProps,
    LocalFavoritesButton,
} from '../../../../../../src/Pages/SearchPage/parts/FavoritesButton';

jest.mock('../../../../../../src/hooks/useFavorites', () =>
    jest.fn().mockReturnValue({
        Favorites: {
            containsBooks: () => true,
        },
    }),
);

jest.mock('../../../../../../src/js/createRedirect', () =>
    jest.fn().mockReturnValue(() => ({ books: jest.fn() })),
);

describe('Given FavoritesButton', () => {
    function createProps(props: Partial<FavoritesButtonProps> = {}): FavoritesButtonProps {
        return {
            fetchFromFavorites: jest.fn(),
            ...props,
        };
    }

    describe('when favorites list does not contain any books', () => {
        it('should be disabled', () => {
            const useFavorites = require('../../../../../../src/hooks/useFavorites');

            (useFavorites as unknown as jest.SpyInstance).mockReturnValueOnce({
                Favorites: { containsBooks: () => false },
            });

            render(<LocalFavoritesButton {...createProps()} />);

            const button = screen.getByText('Ulubione') as HTMLButtonElement;

            expect(button.disabled).toBe(true);
        });
    });

    describe('when clicked', () => {
        it('should fetch favorite books', () => {
            const props = createProps();

            render(<LocalFavoritesButton {...props} />);

            const button = screen.getByText('Ulubione');

            userEvent.click(button);

            expect(props.fetchFromFavorites).toHaveBeenCalledTimes(1);
        });

        it('should redirect to books route', () => {
            const createRedirect = require('../../../../../../src/js/createRedirect');
            const redirect = { books: jest.fn() };

            (createRedirect as jest.SpyInstance).mockReturnValue(() => redirect);

            render(<LocalFavoritesButton {...createProps()} />);

            const button = screen.getByText('Ulubione');

            userEvent.click(button);

            expect(redirect.books).toHaveBeenCalledTimes(1);
        });
    });
});
