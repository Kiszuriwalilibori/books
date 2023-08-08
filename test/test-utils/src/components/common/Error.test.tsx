import { render } from '../../../testing-library-utils';
import Error from '../../../../../src/components/common/Error';
const testText = 'abcdef';
const testClass = 'notfound__item';

describe('Given Error component', () => {
    describe('when called with given props', () => {
        it('renders correctly role, class and text', () => {
            const { getByRole, getByText } = render(<Error error={testText} />);
            const error = getByRole('alert');
            //error is displayed with proper role
            expect(error).toBeInTheDocument();
            const errorClass = document.querySelector(`.${testClass}`);
            //error has proper class
            expect(errorClass).toBeInTheDocument();
            const errorText = getByText(testText);
            //error shows proper text
            expect(errorText).toBeInTheDocument();
        });
    });
});
