import { render, screen } from '../../../testing-library-utils';
import userEvent from '@testing-library/user-event';
import LinkButton from '../../../../../src/components/SearchResults/LinkButton';
import { act, fireEvent, waitFor, cleanup } from '@testing-library/react';

const testText = 'abcdef';
const testClass = 'button--no-underline';
beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
});
describe('Given LinkButton component', () => {
    describe('when called with given props', () => {
        it('renders link element with proper class', () => {
            const { getByRole, getByText } = render(<LinkButton link={testText} label={testText} />);
            const link = getByRole('link');
            expect(link).toBeInTheDocument();
            const linkClass = document.querySelector(`.${testClass}`);
            expect(linkClass).toBeInTheDocument();
        });
        it('correct text is displayed', () => {
            const { getByRole, getByText } = render(<LinkButton link={testText} label={testText} />);
            const linkText = getByText(testText);
            expect(linkText).toBeInTheDocument();
        });
        it('there is anchor in the document with correct href', () => {
            render(<LinkButton link={testText} label={testText} />);
            const anchor = document.querySelector('a');
            expect(anchor).toBeInTheDocument();
            const goodAnchor = document.querySelector(`[href='#/${testText}']`);
            expect(goodAnchor).toBeInTheDocument();
        });
    });

    describe('when clicked', () => {
        it('modifies location.pathname accordingly', () => {
            const { getByRole } = render(<LinkButton link={testText} label={testText} />);
            const link = getByRole('link');
            userEvent.click(link);
            expect(global.window.location.href).toContain(`#/${testText}`);
        });
    });
});
