import { render, screen, waitFor } from '../../../testing-library-utils';
import { cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import IndividualBook from '../../../../../src/Pages/IndividualBookPage/IndividualBookPage';

describe.skip('Given component', () => {
    describe('when rendered', () => {
        it('displays correctly', () => {
            const { getByText } = render(<IndividualBook />);
            const GBF = getByText('Google Books Finder');
            expect(GBF).toBeInTheDocument();
        });
    });
});
