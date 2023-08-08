import { Route } from 'react-router-dom';

const CreateRoute = ({ Component, ...rest }) => <Route {...rest} render={Component} />;
export default CreateRoute;
