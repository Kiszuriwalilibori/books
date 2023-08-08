import { render, screen } from '../../../testing-library-utils';
import userEvent from '@testing-library/user-event';
import { default as UnconnectedPagination } from '@material-ui/lab/Pagination';

const testPage = 2;
const testCount = 5;
const testFn: (event: React.ChangeEvent<unknown>, page: number) => void = jest.fn();

describe('Given Pagination component', () => {
    describe('when called with given props', () => {
        it('renders correctly  and executes function call when clicked', () => {
            const { getAllByRole, getByLabelText } = render(
                <UnconnectedPagination
                    onChange={testFn}
                    variant={'outlined'}
                    color={'secondary'}
                    count={testCount}
                    page={testPage}
                />,
            );

            const pagination = getByLabelText('pagination navigation');
            //check pagination to be displayed at all
            expect(pagination).toBeInTheDocument();
            const buttons = getAllByRole('button');
            // displays correct number of buttons(nuber of pages +buttons  next and Prev)
            expect(buttons).toHaveLength(testCount + 2);
            // button for given page has role 'aria-current'
            expect(buttons[testPage]).toHaveAttribute('aria-current', 'true');
            // button for given page has proper class
            expect(buttons[testPage]).toHaveClass('Mui-selected');
            userEvent.click(buttons[testPage + 1]);
            //checks function is called on non-button click
            expect(testFn).toBeCalledTimes(1);
            userEvent.click(buttons[testPage]);
            //checks function is called on current button click
            expect(testFn).toBeCalledTimes(2);
        });
    });
});
