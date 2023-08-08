import LandingPage from '../../../../src/Pages/LandingPage';
import { render } from '../../testing-library-utils';
import { cleanup, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe('Given LandingPage component', () => {
    describe('when rendered', () => {
        it('displays correctly at least some of its test content', () => {
            const { getByText } = render(<LandingPage />);
            const GoogleBooks = getByText('Google Books');
            expect(GoogleBooks).toBeInTheDocument();
            const To = getByText(
                'To, co za chwilę zobaczycie to skromny interfejs do wyszukiwania książek w zasobach Google Books.',
            );
            expect(To).toBeInTheDocument();
        });
    });
    describe('when is clicked', () => {
        it('modifies location.pathname to lead to  SearchPage', () => {
            const { getByText } = render(<LandingPage />);
            const GoogleBooks = getByText('Google Books');
            expect(GoogleBooks).toBeInTheDocument();
            userEvent.click(GoogleBooks);
            expect(global.window.location.href).toContain('/search');
        });
    });

    describe('when renders', () => {
        const Favorites = {
            manageSupport: jest.fn(),
        };
        jest.mock('../../../../src/hooks/useFavorites', () => () => Favorites);
        it('calls Favorites.manageSupport', () => {
            act(async () => {
                render(<LandingPage />);
                await waitFor(() => {
                    expect(Favorites.manageSupport).toBeCalledTimes(1);
                });
            });
        });
    });
    describe('when renders and Favorites.manageSupport returns true', () => {
        const Favorites = {
            manageSupport: jest.fn().mockReturnValue(true),
            showSize: jest.fn(),
        };
        jest.mock('../../../../src/hooks/useFavorites', () => () => Favorites);
        it('calls Favorites.manageSupport', () => {
            act(async () => {
                render(<LandingPage />);
                await waitFor(() => {
                    expect(Favorites.showSize).toBeCalledTimes(1);
                });
            });
        });
    });
});
