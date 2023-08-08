import { render, screen } from '../../../testing-library-utils';
import userEvent from '@testing-library/user-event';
import { Button } from '../../../../../src/components/common/Button';

const testClass = 'button--ok';
const testText = 'abcdef';
const testFn = jest.fn();

describe('Given Button component', () => {
    describe('when called with given props', () => {
        it('renders correctly role, class and executes function call when clicked', () => {
            const { getByRole, container } = render(<Button className={testClass} onClick={testFn} />);
            //check if something is rendered at all
            expect(container).not.toBeEmptyDOMElement();
            const button = getByRole('button');
            //check if what is rendered is button
            expect(container.children[0]).toBe(button);
            const buttonClass = document.querySelector(`.${testClass}`);
            // check button has proper class
            expect(buttonClass).toBe(button);
            //checks function passed as onClick is called once when clicked
            userEvent.click(button);
            expect(testFn).toBeCalledTimes(1);
        });
        it('is disabled when prop disabled is passed true', () => {
            const { getByRole } = render(<Button className={testClass} onClick={testFn} disabled={true} />);
            const button = getByRole('button');
            expect(button).toHaveAttribute('disabled', '');
        });
        it('is not disabled when prop disabled is false', () => {
            const { getByRole } = render(<Button className={testClass} onClick={testFn} disabled={false} />);
            const button = getByRole('button');
            expect(button).not.toHaveAttribute('disabled');
        });
        it('renders children', () => {
            const { getByText } = render(<Button children={testText} />);
            const text = getByText(testText);
            expect(text).toBeInTheDocument();
        });
    });
});
