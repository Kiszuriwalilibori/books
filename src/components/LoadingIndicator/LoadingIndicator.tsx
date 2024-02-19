import { connect } from "react-redux";

import { ProgressIndicator, Container } from "./LoadingIndicator.styles";
import { RootStateType } from "types";
import useDelayedCondition from "hooks/useDelayedCondition";

interface Props {
    isLoading: RootStateType["loading"]["isLoading"];
    areDetailsLoading?: boolean;
}
const LoadingIndicator = (props: Props) => {
    const { isLoading, areDetailsLoading = false } = props;
    const shouldRender = useDelayedCondition(isLoading || areDetailsLoading);

    if (!shouldRender) return null;

    return (
        <Container>
            <ProgressIndicator thickness={5} size={100} />
        </Container>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    isLoading: state.loading.isLoading,
});

export default connect(mapStateToProps, {})(LoadingIndicator);
