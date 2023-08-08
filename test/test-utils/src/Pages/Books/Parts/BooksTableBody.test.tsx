import { render } from '../../../../testing-library-utils';
import { TableBody } from '../../../../../../src/Pages/Books/Parts/BooksTableBody/BooksTableBody';
import { BookRecordsArray } from '../../../../../../src/types';

const mockPageContent: BookRecordsArray = [['Mój mały kotek', ' ', 'pl', ' ', ' ', '2016', 'W47ujwEACAAJ']];
const mockEmptyPageContent: BookRecordsArray = [];
const mockUndefinedPageContent = undefined as unknown as BookRecordsArray;
const mockCreateRows = jest.fn();

jest.mock(
    '../../../../../../src/Pages/Books/Parts/BooksTableBody/parts/createRows',
    () => (props: BookRecordsArray) => {
        mockCreateRows(props);
        return;
    },
);

describe('Given BooksTableBody component', () => {
    describe('when called with empty table', () => {
        test('renders nothing', () => {
            const { container } = render(<TableBody pageContent={mockEmptyPageContent} />);
            expect(container).toBeEmptyDOMElement();
        });
    });
    describe('when called with undefined', () => {
        test('renders nothing', () => {
            const { container } = render(<TableBody pageContent={mockUndefinedPageContent} />);
            expect(container).toBeEmptyDOMElement();
        });
    });
    describe('when called with correct table row data', () => {
        test('renders something', () => {
            const { container } = render(<TableBody pageContent={mockPageContent} />);
            expect(container).not.toBeEmptyDOMElement();
        });
        test('its first child is tbody', () => {
            const { container } = render(<TableBody pageContent={mockPageContent} />);
            expect(container.children[0]).toBe(document.querySelector('tbody'));
        });
        test('it calls proper function with expected props', () => {
            render(<TableBody pageContent={mockPageContent} />);
            expect(mockCreateRows).toBeCalledWith(mockPageContent);
        });
    });
});
