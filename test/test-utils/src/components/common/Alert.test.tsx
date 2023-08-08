import { render, screen } from '../../../testing-library-utils';
import Alert from '../../../../../src/components/common/Alert';
import { debug } from 'console';
const testText = 'abcdef';

describe('Given Alert component', () => {
    describe('when called with isVisible = true', () => {
        it('renders correctly role, class and text', () => {
            const { getByRole, queryByText } = render(<Alert message={testText} isHidden={false} />);
            const alert = getByRole('alert');
            //alert is displayed with proper role
            expect(alert).toBeInTheDocument();
            const errorText = queryByText(testText);
            //error shows proper text
            expect(errorText).toBeInTheDocument();
        });
    });
    describe('when called with isVisible = false', () => {
        it('does not render anything', () => {
            const { queryByRole, queryByText } = render(<Alert message={testText} isHidden={true} />);
            const alert = queryByRole('alert');
            //alert is NOT displayed
            expect(alert).toBeNull();
            const errorText = queryByText(testText);
            //text is NOT displayed
            expect(errorText).not.toBeInTheDocument();
        });
    });
});
