import { render } from '../../../testing-library-utils';
import userEvent from '@testing-library/user-event';
import { act, waitFor, cleanup } from '@testing-library/react';
import RoundButton from '../../../../../src/Pages/Books/Parts/cells/buttons/RoundButton';
import { MouseEventHandler } from 'react';
import buttonData from '../../../../../src/models/Buttons';
import fs from 'fs';
import path from 'path';

const testButtonData = buttonData.test;
const testID = 'testID';
const mockClickHandler: MouseEventHandler<HTMLButtonElement> = jest.fn();
const testType = 'test';

beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
    render(<RoundButton id={testID} type={testType} clickHandler={mockClickHandler} />);
});

describe('Given RoundButtonComponent', () => {
    describe('when called with props', () => {
        it('renders button component with proper aria-label', () => {
            const button = document.querySelector(`button[aria-label=${testButtonData.ariaLabel}]`);
            expect(button).toBeInTheDocument();
        });
        it('renders button component with proper itemProp', () => {
            const button = document.querySelector(`button[itemProp=${testButtonData.itemProp}]`);
            expect(button).toBeInTheDocument();
        });
        it('render button component with proper data-content', () => {
            const button = document.querySelector(`button[data-content=${testID}]`);
            expect(button).toBeInTheDocument();
        });
        it("render button component with className 'tooltip' ", () => {
            const button = document.querySelector('button');
            expect(button).toHaveClass('tooltip');
        });
        it("render span with className 'tooltiptext' ", () => {
            const span = document.querySelector('span.tooltiptext');
            expect(span).toBeInTheDocument();
        });

        it('render span with proper textContent ', () => {
            const span = document.querySelector('span.tooltiptext');
            expect(span).toHaveTextContent(testButtonData.tooltip);
        });
    });

    describe('when clicked', () => {
        it('calls passed callback once', async () => {
            const button = document.querySelector('button');
            act(async () => {
                userEvent.click(button as Element);
            });
            await waitFor(() => {
                expect(mockClickHandler).toBeCalledTimes(1);
            });
        });
    });

    describe('when not hovered', () => {
        it(' its tooltip is invisible', async () => {
            const { container } = render(
                <RoundButton id={testID} type={testType} clickHandler={mockClickHandler} />,
            );
            const cssFile = fs.readFileSync(
                path.resolve(__dirname, '../../../../../src/styles/App.css'),
                'utf8',
            );
            const style = document.createElement('style');
            style.innerHTML = cssFile;
            container.append(style);
            const tooltip = document.querySelector('.tooltiptext');
            expect(tooltip).toBeInTheDocument();
            expect(tooltip).toHaveTextContent(testButtonData.tooltip);
            expect(tooltip).not.toBeVisible();
        });
    });
    describe('when hovered', () => {
        it(' its tooltip should be visible', async () => {
            const button = document.querySelector('button');
            const tooltip = document.querySelector('.tooltiptext');
            act(async () => {
                userEvent.hover(button as Element);
            });
            await waitFor(() => {
                expect(tooltip).toHaveStyle({ visibility: 'visible' });
            });
        });
    });
});
