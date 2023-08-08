import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyTooltip from '../../../../../src/components/common/Tooltip';

describe('Given MyTooltip component', () => {
    describe('when wrapped around another JSX element', () => {
        it('should add a tooltip to the contained element', async () => {
            render(
                <MyTooltip title="Just a fake tooltip">
                    <div>Contained element</div>
                </MyTooltip>,
            );

            const element = screen.getByText('Contained element');

            userEvent.hover(element);

            const tooltip = await screen.findByText('Just a fake tooltip');

            expect(tooltip).toBeInTheDocument();
        });
    });
});
