import { render } from '../../../../testing-library-utils';
import { cleanup, waitFor } from '@testing-library/react';

import { LocalMessageSnackbar } from '../../../../../../src/Pages/Books/Parts/MessageSnackBar';

const mockText = 'abc123';
const testPropsOpen = { open: true, snackbarText: mockText };
const testPropsClose = { open: false, snackbarText: mockText };

jest.mock('../../../../../../src/hooks/useDispatchAction.ts', () => () => actions);
const actions = {
    toggleSnackBar: jest.fn(),
};

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe('Given SnackBar component', () => {
    describe('when called with prop open = false ', () => {
        it('displays nothing ', () => {
            const { container } = render(<LocalMessageSnackbar {...testPropsClose} />);
            expect(container).toBeEmptyDOMElement();
        });
    });
    describe('when called with prop open = true ', () => {
        it('displays desired text', () => {
            const { container, getByText } = render(<LocalMessageSnackbar {...testPropsOpen} />);
            expect(container).not.toBeEmptyDOMElement();
            const text = getByText(mockText);
            expect(text).toBeInTheDocument();
        });
        it('displays alert and snackbar', () => {
            const { getByRole } = render(<LocalMessageSnackbar {...testPropsOpen} />);
            const muiSnackBar = document.querySelector('.MuiSnackbar-root');
            expect(muiSnackBar).toBeInTheDocument();
            const alert = getByRole('alert');
            expect(alert).toBeInTheDocument();
        });
        it('finally dispatches proper action', async () => {
            render(<LocalMessageSnackbar {...testPropsOpen} />);
            await new Promise(r => setTimeout(r, 4000));
            await waitFor(() => expect(actions.toggleSnackBar).toBeCalledTimes(1));
        });
    });
});
