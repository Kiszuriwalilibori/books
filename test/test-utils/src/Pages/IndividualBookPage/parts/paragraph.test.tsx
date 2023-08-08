import { render } from '../../../../testing-library-utils';
import Paragraph from '../../../../../../src/Pages/IndividualBookPage/parts/paragraph';

const mockNode = 'testNode';
const mockLabel = 'testLabel';

describe('Given Title component', () => {
    describe('when rendered with given props', () => {
        it('displays element of correct type', () => {
            render(<Paragraph node={mockNode} label={mockLabel} />);
            const p = document.querySelector('p');
            expect(p).toBeInTheDocument();
            const strong = document.querySelector('strong');
            expect(strong).toBeInTheDocument();
        });
        it('displays element with correct class', () => {
            render(<Paragraph node={mockNode} label={mockLabel} />);
            const item = document.querySelector('.details__item');
            expect(item).toBeInTheDocument();
            const strong = document.querySelector('.details__strong');
            expect(strong).toBeInTheDocument();
        });
        it('displays element with correct test content', () => {
            const { getByText } = render(<Paragraph node={mockNode} label={mockLabel} />);

            const label = getByText(/testLabel/i);
            const node = getByText(/testNode/i);
            expect(label).toBeInTheDocument();
            expect(node).toBeInTheDocument();
        });
    });
});
