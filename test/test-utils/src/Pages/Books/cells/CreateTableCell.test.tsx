import { render } from '../../../../testing-library-utils';
import CreateTableCell from '../../../../../../src/Pages/Books/Parts/cells/CreateTableCell';
import { cleanup } from '@testing-library/react';

const testString = 'testString';
const ar = ['aaaaaaa', 'bbbbbbbb', 'ccccccccccc', 'ddddddddddd', 'eeeeeeeee', 'fffffffffff'];

beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe('Given Cell component', () => {
    describe('when rendered with certain props and text content', () => {
        for (let i = 0; i <= ar.length - 1; i++) {
            if (i == 2) {
                it('display cell of "cell-withButtons" class with proper text content and role', () => {
                    const Cell = CreateTableCell(testString, i, ar);
                    const { getByText, getByRole } = render(
                        <table>
                            <tbody>
                                <tr>{Cell}</tr>
                            </tbody>
                        </table>,
                    );
                    const cellWithButtons = document.querySelector('.cell-withButtons');
                    expect(cellWithButtons).toBeInTheDocument();
                    const text = getByText(testString);
                    expect(text).toBeInTheDocument();
                    const group = getByRole('group');
                    expect(group).toBeInTheDocument();
                });
            }
        }
    });

    describe('when rendered with certain props', () => {
        it('display cell of ".cell-regular" class)', () => {
            const Cell = CreateTableCell(testString, 1, ar);
            const { getByText } = render(
                <table>
                    <tbody>
                        <tr>{Cell}</tr>
                    </tbody>
                </table>,
            );

            const cellRegular = document.querySelector('.cell-regular');
            expect(cellRegular).toBeInTheDocument();
            const text = getByText(testString);
            expect(text).toBeInTheDocument();
            // expect(group).toBeInTheDocument();
            // const buttons = document.querySelectorAll('button');
            // expect(buttons).toHaveLength(3);
            // const goToShop = document.querySelector('[aria-label="goToShop"]');
            // expect(goToShop).toBeInTheDocument();
            // const removeBook = document.querySelector('[aria-label="removeBook"]');
            // expect(removeBook).toBeInTheDocument();
            // const showFullInfo = document.querySelector('[aria-label="showFullInfo"]');
            // expect(showFullInfo).toBeInTheDocument();
        });
    });
});
