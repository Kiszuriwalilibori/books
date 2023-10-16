import { ProgressIndicator, Container } from "./styled";

import { RootStateType } from "types/index";
import { connect } from "react-redux";

interface Props {
    isLoading: boolean;
    areDetailsLoading?: boolean;
}
const LoadingIndicator = (props: Props) => {
    const { isLoading, areDetailsLoading = false } = props;

    if (!isLoading && !areDetailsLoading) return null;

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
