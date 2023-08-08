import { useFiltersVisibilityContext } from '../../../../src/Contexts/FiltersVisibilityContext';
import Enzyme, { shallow, mount } from 'enzyme';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new ReactSeventeenAdapter() });

const FunctionalComponent = () => {
    useFiltersVisibilityContext();
    return <div />;
};

test.skip('throws error when used outside of provider', () => {
    expect(() => {
        shallow(<FunctionalComponent />);
    }).toThrow('it must be used within a FiltersVisibilityContextProvider');
});
