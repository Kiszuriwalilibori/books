import axios, { AxiosError } from "axios";
import Fade from "@mui/material/Fade";

import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import Details from "./components";

import { PageContainer } from "pages/styled";
import { isOffline } from "js/utils";
import { LoadingIndicator, ErrorMessage, NavigationFactory } from "components";
import { currentURL } from "js/redux/selectors";
import { BookDetails } from "types";

const DetailsPage = () => {
    const URL = useSelector(currentURL);

    const { isLoading, error, data } = useQuery([URL], () => axios(URL), {
        staleTime: 60000,
        cacheTime: 60000,
        select: data => data.data as BookDetails,
        enabled: Boolean(URL),
    });

    if (isOffline()) {
        return <ErrorMessage errorMessage={"No Internet connection available"} />;
    }

    if (!URL) {
        return <ErrorMessage errorMessage={"Nie dostarczono URL szukanej książki"} />;
    }
    if (isLoading) return <LoadingIndicator areDetailsLoading={true} />;

    if (error) return <ErrorMessage errorMessage={(error as AxiosError).message} />;

    return data && data.volumeInfo ? (
        <Fade in={true}>
            <PageContainer maxWidth={false} disableGutters={true}>
                <section className="details-container details">
                    <NavigationFactory />
                    <Details {...data} />
                </section>
            </PageContainer>
        </Fade>
    ) : null;
};
export default DetailsPage;
