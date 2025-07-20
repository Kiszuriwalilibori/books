import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Button from "components/Button";

import { Authors, Categories, CenteredButtonStack, Cover, Description, ISBN, Paragraph, Price, Title } from ".";
import { polishTranslationMap } from "./utils";
import { BookDetails } from "types";
import { isOnlineSelector } from "store/selectors";

const Details = (props: BookDetails) => {
    const { volumeInfo, saleInfo, accessInfo } = props;
    const isOnline = useSelector(isOnlineSelector);
    const { t } = useTranslation();

    return (
        <article aria-label={t("detailsPage.title")}>
            {volumeInfo?.title && <Title title={volumeInfo.title} />}
            {volumeInfo?.imageLinks?.smallThumbnail?.linkToCover && <Cover linkToCover={volumeInfo?.imageLinks?.smallThumbnail?.linkToCover} />}
            {volumeInfo?.authors?.length && <Authors authors={volumeInfo?.authors} label={t("bookDetails.authors")} />}
            {volumeInfo?.publisher && <Paragraph textContent={volumeInfo?.publisher} label={t("bookDetails.publisher")} />}
            {volumeInfo?.publishedDate && <Paragraph textContent={volumeInfo?.publishedDate} label={t("bookDetails.publishedDate")} />}
            {volumeInfo?.language && <Paragraph textContent={volumeInfo?.language} label={t("bookDetails.language")} />}
            {volumeInfo?.pageCount && <Paragraph textContent={volumeInfo?.pageCount} label={t("bookDetails.pageCount")} />}
            {volumeInfo?.categories?.length && <Categories categories={volumeInfo.categories} label={t("bookDetails.categories")} />}
            {volumeInfo?.description?.length > 0 && <Description description={volumeInfo?.description} />}
            {volumeInfo?.industryIdentifiers?.length && <ISBN ISBNData={volumeInfo?.industryIdentifiers} label="ISBN" />}
            {volumeInfo?.printType && <Paragraph textContent={polishTranslationMap.get(volumeInfo.printType) ?? volumeInfo.printType} label={t("bookDetails.printType")} />}
            {saleInfo?.saleability && <Paragraph textContent={polishTranslationMap.get(saleInfo.saleability) ?? saleInfo.saleability} label={t("bookDetails.saleability")} />}
            {saleInfo?.isEbook && <Paragraph textContent={polishTranslationMap.get(saleInfo.isEbook) ?? String(saleInfo.isEbook)} label={t("bookDetails.isEbook")} />}
            {accessInfo?.textToSpeechPermission && <Paragraph textContent={polishTranslationMap.get(accessInfo.textToSpeechPermission) ?? accessInfo.textToSpeechPermission} label={t("bookDetails.textToSpeech")} />}
            {saleInfo?.listPrice && typeof saleInfo?.listPrice === "object" && Object.keys(saleInfo?.listPrice).length && <Price price={saleInfo?.listPrice} label={t("bookDetails.listPrice")} />}
            {saleInfo?.retailPrice && typeof saleInfo?.retailPrice === "object" && Object.keys(saleInfo?.retailPrice).length && <Price price={saleInfo?.retailPrice} label={t("bookDetails.retailPrice")} />}
            <CenteredButtonStack>
                {saleInfo?.buyLink && (
                    <Button disabled={!isOnline} className="button--ok button--centered button--no-underline button--long" onClick={() => window.open(saleInfo?.buyLink, "_blank")}>
                        {t("bookDetails.goToStore")}
                    </Button>
                )}

                {accessInfo?.webReaderLink && (
                    <Button disabled={!isOnline} className="button--ok button--centered button--no-underline button--long" onClick={() => window.open(accessInfo?.webReaderLink, "_blank")}>
                        {t("bookDetails.readSample")}
                    </Button>
                )}
            </CenteredButtonStack>
        </article>
    );
};

export default Details;
