import { Authors, Categories, Cover, Description, Link, ISBN, Paragraph, Price, Title } from "./components";
import { convertToPolish } from "./components/utils";
import { BookDetails } from "types";

interface Props {
    bookData: {
        volumeInfo: {
            title: string;
            imageLinks: {
                smallThumbnail: { linkToCover: string; label: string };
                thumbnail: string;
                small: string;
                medium: string;
                large: string;
                extraLarge: string;
            };
            authors: string[];
            publisher: string;
            publishedDate: string;
            language: string;
            pageCount: number;
            categories: string[];
            industryIdentifiers: { type: string; identifier: string }[];
            description: string;
            printType: string;
        };
        saleInfo: {
            isEbook: boolean;
            saleability: string;
            listPrice: { amount: number; currencyCode: string };
            retailPrice: { amount: number; currencyCode: string };
            buyLink: string;
        };
        accessInfo: {
            textToSpeechPermission: string;
            webReaderLink: string;
        };
    };
}
let Details = (props: BookDetails) => {
    const { bookData } = props;
    return (
        <article>
            {bookData?.volumeInfo?.title && <Title node={bookData.volumeInfo.title} />}
            {bookData?.volumeInfo?.imageLinks?.smallThumbnail?.linkToCover && <Cover linkToCover={bookData?.volumeInfo?.imageLinks?.smallThumbnail?.linkToCover} label={"zdjęcie okładki"} />}
            {bookData?.volumeInfo?.authors?.length && <Authors authors={bookData?.volumeInfo?.authors} label="Autorzy" />}
            {bookData?.volumeInfo?.publisher && <Paragraph node={bookData?.volumeInfo?.publisher} label={"Wydawca"} />}
            {bookData?.volumeInfo?.publishedDate && <Paragraph node={bookData?.volumeInfo?.publishedDate} label={"Data wydania"} />}
            {bookData?.volumeInfo?.language && <Paragraph node={bookData?.volumeInfo?.language} label={"Język"} />}
            {bookData?.volumeInfo?.pageCount && <Paragraph node={bookData?.volumeInfo?.pageCount} label={"Stron"} />}
            {bookData?.volumeInfo?.categories?.length && <Categories categories={bookData.volumeInfo.categories} label={"Kategorie"} />}
            {bookData?.volumeInfo?.description?.length > 0 && <Description description={bookData?.volumeInfo?.description} />}
            {bookData?.volumeInfo?.industryIdentifiers?.length && <ISBN isbnDataArray={bookData?.volumeInfo?.industryIdentifiers} label={"ISBN"} />}
            {bookData?.volumeInfo?.printType && <Paragraph node={bookData?.volumeInfo?.printType} label={"Rodzaj druku"} callback={convertToPolish} />}
            {bookData?.saleInfo?.saleability && <Paragraph node={bookData?.saleInfo?.saleability} label={"Dostępna w sprzedaży"} callback={convertToPolish} />}
            {bookData?.saleInfo?.isEbook && <Paragraph node={bookData?.saleInfo?.isEbook} label={"Jest e-bookiem"} callback={convertToPolish} />}
            {bookData?.accessInfo?.textToSpeechPermission && <Paragraph node={bookData?.accessInfo?.textToSpeechPermission} label={"Przygotowana do czytników tekstu"} callback={convertToPolish} />}
            {bookData?.saleInfo?.listPrice && typeof bookData?.saleInfo?.listPrice === "object" && Object.keys(bookData?.saleInfo?.listPrice).length && <Price price={bookData?.saleInfo?.listPrice} label={"Cena katalogowa"} />}
            {bookData?.saleInfo?.retailPrice && typeof bookData?.saleInfo?.retailPrice === "object" && Object.keys(bookData?.saleInfo?.retailPrice).length && <Price price={bookData?.saleInfo?.retailPrice} label={"Cena detaliczna"} />}
            {bookData?.saleInfo?.buyLink && <Link href={bookData?.saleInfo?.buyLink} label={"Do sklepu"} />}
            {bookData?.accessInfo?.webReaderLink && <Link href={bookData?.accessInfo?.webReaderLink} label={"Przeczytaj fragment"} />}
        </article>
    );
};

export default Details;
