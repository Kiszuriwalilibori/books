import { screen, render, cleanup } from '../../../testing-library-utils';

import NavigationFactory from '../../../../../src/components/SearchResults/NavigationFactory';
import { Route } from 'react-router-dom';
import Paths from '../../../../../src/Routing/Paths';
const actions = {
    showPreviousDetails: jest.fn(),
    showNextDetails: jest.fn(),
};

jest.mock('../../../../../src/hooks/useDispatchAction.ts', () => () => actions);

describe('Given NavigationFactory', () => {
    describe('when rendered', () => {
        it.skip('displays correctly initial elements', () => {
            const { getByLabelText } = render(
                <Route path={Paths.books}>
                    <NavigationFactory />,
                </Route>,
            );

            const label = getByLabelText('Wyszukiwanie');
            expect(label).toBeInTheDocument();
        });
    });
});
