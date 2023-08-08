import { render } from '../../../../../testing-library-utils';
import userEvent from '@testing-library/user-event';
import { cleanup, waitFor } from '@testing-library/react';
import GoToShopButton from '../../../../../../../src/Pages/Books/Parts/cells/buttons/GoToShopButton';

jest.mock('../../../../../../../src/js/goToShop.ts', () => jest.fn());

beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
});
const mockID = 'mockID';
describe('Given ShowFullInfoButton component', () => {
    describe('when clicked', () => {
        it('calls goToShop callback function once', async () => {
            render(<GoToShopButton id={mockID} />);
            const Button = document.querySelector(`[aria-label=${'goToShop'}]`);
            const mockGoToShop = require('../../../../../../../src/js/goToShop');

            userEvent.click(Button as Element);

            await waitFor(() => {
                expect(mockGoToShop).toBeCalledTimes(1);
                expect(mockGoToShop).toBeCalledWith(expect.objectContaining({ id: 'mockID' }));
            });
        });
    });
});
