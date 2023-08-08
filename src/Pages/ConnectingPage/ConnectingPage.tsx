import * as React from "react";

import { ProgressIndicator } from "./components";
import { PageContainer } from "components";

const ConnectingPage = () => {
    return (
        <PageContainer maxWidth={false} disableGutters={true}>
            <ProgressIndicator thickness={5} size={100} />
        </PageContainer>
    );
};

export default React.memo(ConnectingPage);
