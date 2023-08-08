import { render, screen, waitFor } from '../../testing-library-utils';
import { cleanup, act } from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';

import wrappedInLinkToSearchHOC from '../../../../src/HOCs/wrappedInLinkToSearchHOC';
import { ComponentType } from 'react';

describe.skip('A component', () => {
    describe('when rendered within wrappedInLinkToSearchHOC and clicked', () => {
        it('navigates to SearchPage', async () => {
            const div = document.createElement('div') as unknown as ComponentType<unknown>;
            const item = wrappedInLinkToSearchHOC(div);
            render(item);
            userEvent.click(div as unknown as TargetElement);
            await waitFor(() => expect(global.window.location.href).toContain(`#/Search`));
        });
    });
});
