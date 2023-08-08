import * as React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function withQueryClientProviderHOC<T>(Component: React.ComponentType<T>) {
    return (props: React.PropsWithChildren<T>) => (
        <QueryClientProvider client={queryClient}>
            <Component {...props} />
        </QueryClientProvider>
    );
}

export default withQueryClientProviderHOC;
