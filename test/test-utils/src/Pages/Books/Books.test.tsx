import { render, screen } from '../../../testing-library-utils';
import Books from '../../../../../src/Pages/Books/BooksPage';

describe('Given Books component', () => {
    describe('when renders', () => {
        it('displays or NOT displays respectively its parts', () => {
            render(<Books />);
            const itsContainer = document.querySelector(`.${'table__container'}`);
            // Container renders
            expect(itsContainer).toBeInTheDocument();
            const navigationItem = document.querySelector(`.${'books__buttons navigation-factory__item'}`);
            // Navigation NOT renders initially
            expect(navigationItem).not.toBeInTheDocument();
            const MessageSnackBar = document.querySelector('#MessageSnackBar');
            // MessageSnackBar NOT renders initially
            expect(MessageSnackBar).not.toBeInTheDocument();
            const Table = document.querySelector('[aria-label="Table of Books"]');
            // Table renders initially
            expect(Table).toBeInTheDocument();
            const Modal = document.querySelector('[aria-labelledby="Remove Book Warning"]');
            // Modal NOT renders initially
            expect(Modal).not.toBeInTheDocument();
        });
    });
});
