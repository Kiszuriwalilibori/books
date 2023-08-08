import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextFieldWithTooltip, {
    TextFieldWithTooltipProps,
} from '../../../../../../src/Pages/SearchPage/parts/TextFieldWithTooltip';

describe('Given TextFieldWithTooltip component', () => {
    function createProps(props: Partial<TextFieldWithTooltipProps> = {}): TextFieldWithTooltipProps {
        return {
            value: 'some value',
            name: 'fieldName',
            onChange: jest.fn(),
            onBlur: jest.fn(),
            label: 'Just a fake label',
            ...props,
        };
    }

    describe('when mouse cursor enters rendered TextField', () => {
        it('should display correct tooltip', async () => {
            const value = 'abc';

            render(<TextFieldWithTooltip {...createProps({ value })} />);

            const field = screen.getByDisplayValue(value);

            userEvent.hover(field);

            const tooltip = await screen.findByText('Nie mniej niż dwa znaki w tym jeden alfanumeryczny');

            expect(tooltip).toBeInTheDocument();
        });

        it('should set the focus in the field', () => {
            const value = 'xyz';

            render(<TextFieldWithTooltip {...createProps({ value })} />);

            const field = screen.getByDisplayValue(value);

            jest.spyOn(field, 'focus');

            userEvent.hover(field);

            expect(field.focus).toHaveBeenCalledTimes(1);
        });
    });
});
