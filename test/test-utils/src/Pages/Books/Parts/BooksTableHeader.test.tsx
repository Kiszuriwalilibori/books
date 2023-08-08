import { render } from '../../../../testing-library-utils';
import userEvent from '@testing-library/user-event';
import BooksTableHeader from '../../../../../../src/Pages/Books/Parts/BooksTableHeader';
import * as reactRedux from 'react-redux';
import { columns } from '../../../../../../src/models/Columns';

describe('Given BooksTableHeader', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
    beforeEach(() => {
        useSelectorMock.mockClear();
        useDispatchMock.mockClear();
    });
    describe('when initially rendered', () => {
        it('correctly displays headers', () => {
            useSelectorMock.mockReturnValue({ isSortOrderDescending: true });
            const { getByText } = render(<BooksTableHeader />);
            columns.headers.forEach(item => {
                const th = getByText(item);
                expect(th).toBeInTheDocument();
            });
        });
    });
    describe('when clicked', () => {
        it('dispatches action once', () => {
            useSelectorMock.mockReturnValue({ isSortOrderDescending: true });
            const dummyDispatch = jest.fn();
            useDispatchMock.mockReturnValue(dummyDispatch);
            const { getAllByRole } = render(<BooksTableHeader />);
            /** just in case to check it is not fired before click */
            expect(dummyDispatch).not.toHaveBeenCalled();
            const thArray = getAllByRole('columnheader');
            userEvent.click(thArray[1]);
            expect(dummyDispatch).toHaveBeenCalledTimes(1);
        });
        it('dispatches action with proper type and payload for all th cells', () => {
            useSelectorMock.mockReturnValue({ isSortOrderDescending: true });
            const dummyDispatch = jest.fn();
            useDispatchMock.mockReturnValue(dummyDispatch);
            const { getAllByRole } = render(<BooksTableHeader />);
            const thArray = getAllByRole('columnheader');
            thArray.forEach((item, index) => {
                userEvent.click(item);
                expect(dummyDispatch).toHaveBeenCalledWith({ type: 'THROTTLED_SORT', payload: index });
            });
        });
    });
});
