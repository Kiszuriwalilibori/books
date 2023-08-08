import Logo from '../../../../../../src/Pages/SearchPage/parts/Logo';
import { render, screen } from '../../../../testing-library-utils';
import { cleanup, act } from '@testing-library/react';

describe('Given Logo component', () => {
    describe('when rendered', () => {
        it('displays correctly its text', () => {
            const { getByText } = render(<Logo />);
            const GBF = getByText('Google Books Finder');
            expect(GBF).toBeInTheDocument();
        });
    });
});
