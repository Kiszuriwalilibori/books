import { render } from '../../../../testing-library-utils';
import { Cell } from '../../../../../../src/Pages/Books/Parts/cells/TableCellWithButtons';
import { cleanup } from '@testing-library/react';

const allTrue = {
    index: 1,
    textContent: 'testString',
    bookID: 'testBookId',
    isFetchedFromURL: true,
    isCacheSupported: true,
};

const isFetchedFromURLFalseRestTrue = {
    index: 1,
    textContent: 'testString',
    bookID: 'testBookId',
    isFetchedFromURL: false,
    isCacheSupported: true,
};

const isCacheSupportedFalseRestTrue = {
    index: 1,
    textContent: 'testString',
    bookID: 'testBookId',
    isFetchedFromURL: true,
    isCacheSupported: false,
};

const pageContent = [
    ['Mój mały kotek', '', 'pl', '', '', '2016', 'W47ujwEACAAJ'],
    ['Wlazl kotek na plotek Piosenki dla malych dzieci + CD', '', 'pl', '', '', '2014-01', 'qXzWsgEACAAJ'],
];
beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe('Given Cell component', () => {
    describe('when rendered with allTrue set of props', () => {
        it('displays text content correctly', () => {
            const { getByText } = render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...allTrue} />
                        </tr>
                    </tbody>
                </table>,
            );
            const language = getByText('testString');
            expect(language).toBeInTheDocument();
        });
        it('displays AddToFavoritesButton', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...allTrue} />
                        </tr>
                    </tbody>
                </table>,
            );
            let favoritesButton = document.querySelector(`[aria-label=${'addToFavorites'}]`);
            expect(favoritesButton).toBeInTheDocument();
        });
        it('displays GoToShopButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...allTrue} />
                        </tr>
                    </tbody>
                </table>,
            );

            const goToShop = document.querySelector(`[aria-label=${'goToShop'}]`);
            expect(goToShop).toBeInTheDocument();
        });
        it('displays RemoveBookButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...allTrue} />
                        </tr>
                    </tbody>
                </table>,
            );

            const removeBook = document.querySelector(`[aria-label=${'removeBook'}]`);
            expect(removeBook).toBeInTheDocument();
        });

        it('displays ShowFullInfoButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...allTrue} />
                        </tr>
                    </tbody>
                </table>,
            );
            const showFullInfo = document.querySelector(`[aria-label=${'showFullInfo'}]`);
            expect(showFullInfo).toBeInTheDocument();
        });
        it('does NOT display RemoveBookFromFavoritesButton', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...allTrue} />
                        </tr>
                    </tbody>
                </table>,
            );

            const removeFromFavorites = document.querySelector(`[aria-label=${'removeBookFromFavorites'}]`);
            expect(removeFromFavorites).toBe(null);
        });
    });

    describe('when rendered with isCacheSupportedFalseRestTrue set of props', () => {
        it('displays text content correctly', () => {
            const { getByText } = render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isCacheSupportedFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );
            const language = getByText('testString');
            expect(language).toBeInTheDocument();
        });
        it('does NOT display AddToFavoritesButton', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isCacheSupportedFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );
            const favoritesButton = document.querySelector(`[aria-label=${'addToFavorites'}]`);
            expect(favoritesButton).toBeNull();
        });
        it('displays ShowFullInfoButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isCacheSupportedFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );
            const showFullInfo = document.querySelector(`[aria-label=${'showFullInfo'}]`);
            expect(showFullInfo).toBeInTheDocument();
        });
        it('does NOT display RemoveBookFromFavoritesButton', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isCacheSupportedFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );

            const removeFromFavorites = document.querySelector(`[aria-label=${'removeBookFromFavorites'}]`);
            expect(removeFromFavorites).toBe(null);
        });
        it('displays RemoveBookButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isCacheSupportedFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );

            const removeBook = document.querySelector(`[aria-label=${'removeBook'}]`);
            expect(removeBook).toBeInTheDocument();
        });
        it('displays GoToShopButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isCacheSupportedFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );

            const goToShop = document.querySelector(`[aria-label=${'goToShop'}]`);
            expect(goToShop).toBeInTheDocument();
        });
    });

    /***************************************************** */
    describe('when rendered with isFetchedFromURLFalseRestTrue set of props', () => {
        it('displays text content correctly', () => {
            const { getByText } = render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isFetchedFromURLFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );
            const language = getByText('testString');
            expect(language).toBeInTheDocument();
        });
        it('does NOT display AddToFavoritesButton', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isFetchedFromURLFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );
            const favoritesButton = document.querySelector(`[aria-label=${'addToFavorites'}]`);
            expect(favoritesButton).toBeNull();
        });
        it('displays ShowFullInfoButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isFetchedFromURLFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );
            const showFullInfo = document.querySelector(`[aria-label=${'showFullInfo'}]`);
            expect(showFullInfo).toBeInTheDocument();
        });

        it('displays RemoveBookButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isFetchedFromURLFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );

            const removeBook = document.querySelector(`[aria-label=${'removeBook'}]`);
            expect(removeBook).toBeInTheDocument();
        });
        it('displays RemoveBookFromFavoritesButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isFetchedFromURLFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );

            const removeFromFavorites = document.querySelector(`[aria-label=${'removeBookFromFavorites'}]`);
            expect(removeFromFavorites).toBeInTheDocument();
        });

        it('displays GoToShopButton correctly', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <Cell {...isFetchedFromURLFalseRestTrue} />
                        </tr>
                    </tbody>
                </table>,
            );

            const goToShop = document.querySelector(`[aria-label=${'goToShop'}]`);
            expect(goToShop).toBeInTheDocument();
        });
    });
});
