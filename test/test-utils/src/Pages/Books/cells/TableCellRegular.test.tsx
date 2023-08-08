import { render, screen } from '../../../../testing-library-utils';
import { cleanup, act, waitFor } from '@testing-library/react';
import { TableCellRegular } from '../../../../../../src/Pages/Books/Parts/cells/TableCellRegular';

const testString = 'abcde12345$%%%';
describe('Given Cell component', () => {
    describe('when rendered', () => {
        it('displays cell with expected test', () => {
            const { getByText } = render(
                <table>
                    <tbody>
                        <tr>
                            <TableCellRegular textContent={testString} />
                        </tr>
                    </tbody>
                </table>,
            );

            const string = getByText(testString);
            expect(string).toBeInTheDocument();
        });
        it('displays cell with expected class and of expected type', () => {
            render(
                <table>
                    <tbody>
                        <tr>
                            <TableCellRegular textContent={testString} />
                        </tr>
                    </tbody>
                </table>,
            );
            const withClass = document.querySelector('span.cell-regular');
            expect(withClass).toBeInTheDocument();
        });
    });
});
