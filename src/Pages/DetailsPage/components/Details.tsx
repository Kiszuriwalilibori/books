import Stack from "@mui/material/Stack";

import { useSelector } from "react-redux";
import Button from "components/Button";

import { Authors, Categories, Cover, Description, ISBN, Paragraph, Price, Title } from "./components";
import { convertToPolish } from "./components/utils";
import { BookDetails } from "types";
import { isOnlineSelector } from "store/reducers/onlineReducer";

const Details = (props: BookDetails) => {
    const { volumeInfo, saleInfo, accessInfo } = props;
    const isOnline = useSelector(isOnlineSelector);

    return (
        <article aria-label="Book details">
            {volumeInfo?.title && <Title title={volumeInfo.title} />}
            {volumeInfo?.imageLinks?.smallThumbnail?.linkToCover && <Cover linkToCover={volumeInfo?.imageLinks?.smallThumbnail?.linkToCover} />}
            {volumeInfo?.authors?.length && <Authors authors={volumeInfo?.authors} label="Autorzy" />}
            {volumeInfo?.publisher && <Paragraph content={volumeInfo?.publisher} label={"Wydawca"} />}
            {volumeInfo?.publishedDate && <Paragraph content={volumeInfo?.publishedDate} label={"Data wydania"} />}
            {volumeInfo?.language && <Paragraph content={volumeInfo?.language} label={"Język"} />}
            {volumeInfo?.pageCount && <Paragraph content={volumeInfo?.pageCount} label={"Stron"} />}
            {volumeInfo?.categories?.length && <Categories categories={volumeInfo.categories} label={"Kategorie"} />}
            {volumeInfo?.description?.length > 0 && <Description description={volumeInfo?.description} />}
            {volumeInfo?.industryIdentifiers?.length && <ISBN ISBNData={volumeInfo?.industryIdentifiers} label={"ISBN"} />}
            {volumeInfo?.printType && <Paragraph content={volumeInfo?.printType} label={"Rodzaj druku"} preProcess={convertToPolish} />}
            {saleInfo?.saleability && <Paragraph content={saleInfo?.saleability} label={"Dostępna w sprzedaży"} preProcess={convertToPolish} />}
            {saleInfo?.isEbook && <Paragraph content={saleInfo?.isEbook} label={"Jest e-bookiem"} preProcess={convertToPolish} />}
            {accessInfo?.textToSpeechPermission && <Paragraph content={accessInfo?.textToSpeechPermission} label={"Przygotowana do czytników tekstu"} preProcess={convertToPolish} />}
            {saleInfo?.listPrice && typeof saleInfo?.listPrice === "object" && Object.keys(saleInfo?.listPrice).length && <Price price={saleInfo?.listPrice} label={"Cena katalogowa"} />}
            {saleInfo?.retailPrice && typeof saleInfo?.retailPrice === "object" && Object.keys(saleInfo?.retailPrice).length && <Price price={saleInfo?.retailPrice} label={"Cena detaliczna"} />}
            <Stack spacing={2} sx={{ paddingTop: 5 }}>
                {saleInfo?.buyLink && (
                    <a tabIndex={-1} className="no-text-decoration" href={saleInfo?.buyLink}>
                        <Button disabled={!isOnline} className="button--ok button--centered button--no-underline button--long" children={"Do sklepu"} />
                    </a>
                )}

                {accessInfo?.webReaderLink && (
                    <a tabIndex={-1} className="no-text-decoration" href={accessInfo?.webReaderLink}>
                        <Button disabled={!isOnline} className="button--ok button--centered button--no-underline button--long" children={"Przeczytaj fragment"} />
                    </a>
                )}
            </Stack>
        </article>
    );
};

export default Details;
