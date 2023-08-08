import axios, { AxiosError } from "axios";

import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import Details from "./components";
import { isOffline } from "js/utils";
import ConnectingPage from "../ConnectingPage";

import { ErrorMessage, NavigationFactory, PageContainer } from "components";
import { currentURL } from "js/redux/selectors";
import { BookDetailsContent } from "types";

const IndividualBookPage = () => {
    const URL = useSelector(currentURL);
    const { isLoading, error, data } = useQuery([URL], () => axios(URL), {
        staleTime: 60000,
        select: data => data.data as BookDetailsContent,
    });

    if (isOffline()) {
        return <ErrorMessage error={"No Internet connection available"} />;
    }

    if (!URL) {
        return <ErrorMessage error={"Nie dostarczono URL szukanej książki"} />;
    }
    if (isLoading) return <ConnectingPage />;

    if (error) return <ErrorMessage error={(error as AxiosError).message} />;

    return data && data.volumeInfo ? (
        <PageContainer maxWidth={false} disableGutters={true}>
            <section className="details-container details">
                <NavigationFactory />
                <Details bookData={data} />
            </section>
        </PageContainer>
    ) : null;
};
export default IndividualBookPage;
