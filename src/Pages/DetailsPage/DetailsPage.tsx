import axios, { AxiosError } from "axios";
import Fade from "@mui/material/Fade";

import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { Details } from "./components";

import { PageContainer } from "pages/styled";
import { isOffline } from "utils";
import { LoadingIndicator, ErrorMessage, NavigationFactory } from "components";

import { BookDetails } from "types";
import { usePersistDetailsURL } from "hooks";
import { currentURLSelector } from "store/selectors";

const DetailsPage = () => {
    const URL = useSelector(currentURLSelector);
    const storedURL = usePersistDetailsURL(URL);
    const { isLoading, error, data } = useQuery([storedURL], () => axios(storedURL), {
        staleTime: 60000,
        cacheTime: 60000,
        select: data => data.data as BookDetails,
        enabled: Boolean(storedURL),
    });

    if (isOffline()) {
        return <ErrorMessage errorMessage={"No Internet connection available"} />;
    }

    if (!storedURL && !URL) {
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
