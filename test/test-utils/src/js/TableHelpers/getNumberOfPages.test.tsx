import { getNumberOfPages } from '../../../../../src/js/BooksManager/tableHelpers/getNumberOfPages';
import { BookRecordsArray } from '../../../../../src/types';
const ary1: BookRecordsArray = [[]];
const ary2: BookRecordsArray = [['a', 'b']];
const ary3: BookRecordsArray = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j'],
];

describe('Given getNumberOfPages function', () => {
    describe('when called', () => {
        it('returns correct results', () => {
            expect(getNumberOfPages(ary1)).toBe(1);
            expect(getNumberOfPages(ary2)).toBe(1);
            expect(getNumberOfPages(ary3)).toBe(2);
        });
    });
});
