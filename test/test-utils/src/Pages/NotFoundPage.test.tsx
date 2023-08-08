import { NotFound } from '../../../../src/Pages/NotFoundPage';
import { render } from '../../testing-library-utils';
import { cleanup, act } from '@testing-library/react';

beforeEach(() => {
    cleanup();
});

const testMessage = 'Nie znaleziono księżek spełniających podane kryteria';

describe('Given NotFound component', () => {
    describe('when rendered with given error message', () => {
        it('displays correctly error message and warning text', () => {
            act(() => {
                const { getByText } = render(<NotFound />);
                const Ojejku = getByText('Ojejku! Coś poszło nie tak:');
                expect(Ojejku).toBeInTheDocument();
                const message = getByText(testMessage);
                expect(message).toBeInTheDocument();
            });
        });
    });
});
