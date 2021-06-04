import React, { useCallback } from "react";
import { shallowEqual, useSelector } from "react-redux";
import getSummary from "../../js/getSummary";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import NavigationFactory from "./NavigationFactory";
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";

const convertToPolish = x => {
  let result = "";
  switch (x) {
    case true:
      result = "Tak";
      break;
    case false:
      result = "Nie";
      break;
    case "BOOK":
      result = "Książka";
      break;
    case "MAGAZINE":
      result = "Magazyn";
      break;
    case "ALLOWED":
      result = "Tak";
      break;
    case "NOT_ALLOWED":
      result = "Nie";
      break;
    case "FOR_SALE":
      result = "Tak";
      break;
    case "NOT_FOR_SALE":
      result = "Nie";
      break;
    case "ALLOWED_FOR_ACCESSIBILITY":
      result = "Tak";
      break;
    default:
      result = "Nie";
  }
  return result;
};

const LabelledArray = props => {
  return props.ary && props.ary.length > 0 ? (
    <>
      <h3 className="details__header details__strong">{props.label + ":\xa0"}</h3>
      <ul className="details__list list">
        {props.ary.map((item, i, ar) => (
          <li className="details__item list__item " key={i}>
            {typeof item === "object" && item !== null ? [...Object.values(item).map((item, index, array) => (index === array.length - 1 ? item + "\xa0" : item + ",\xa0"))] : i === ar.length - 1 ? item + "\xa0" : item + ",\xa0"}
          </li>
        ))}
      </ul>
      <br />
    </>
  ) : null;
};



const coma = (x, arry) => {
  return x === arry.length - 1 ? "\xa0" : ",\xa0";
};
const colon = (x, arry) => {
  return x === arry.length - 1 ? "" : ":\xa0";
};

const ISBN = props => {
  const { ary, label } = props;
  return ary && ary.length > 0 ? (
    <>
      <h3 className="details__header details__strong">{label + ":\xa0"}</h3>
      <ul className="details__list list">
        {ary.map((item, i, ar) => (
          <li className="details__item list__item" key={i}>
            {Object.values(item).map((item, index, array) => item + colon(index, array))}
            {coma(i, ar)}
          </li>
        ))}
      </ul>
      <br />
    </>
  ) : null;
};

const LabelledObject = props => {
  const label = props.label + ":\xa0";
  const obj = { ...props.obj };
  return obj && typeof obj === "object" && obj !== null && Object.keys(obj).length > 0 ? (
    <>
      <h3 className="details__header details__strong">{label}</h3>
      <p className="details__item list__item"> {[...Object.values(obj).map((item, index, array) => (index - 1 === array.length ? item : item + "\xa0"))]}</p>
      <br />
    </>
  ) : null;
};

const Paragraph = props => {
  return props.node ? (
    <p className="details__item">
      <strong className="details__strong">{props.label + ":\xa0"}</strong>
      {props.callback ? props.callback(props.node) : props.node}
    </p>
  ) : null;
};

const Cover = props => {
  return props.node ? (
    <>
      <img className="details__image" src={props.node} alt={props.label}></img>
      <br />
    </>
  ) : null;
};

const Link = props => {
  const { node, label } = props;
  return node ? (
    <a className="details__link" href={node}>
      {label}
    </a>
  ) : null;
};

const Title = props => {
  const { node } = props;
  return node ? <h1 className="details__title">{node}</h1> : null;
};

const Description = props => {
  const { desc } = props;
  return desc && desc.length ? (
    <section className="details__description">
      <h2 className="details__strong">Opis</h2>
      <details className="details__item">
        <summary>{getSummary(desc)}</summary>
        {desc.replace("<p>", "").replace("</p>", "")}
      </details>
    </section>
  ) : null;
};

let SingleBook = () => {
  const singleBookData = useSelector(state => state.books.currentBookWithDetailedInfoData, shallowEqual);
  const prevButtonVisible = useSelector(state => state.books.prevDetailedBookButtonVisible, shallowEqual);
  const nextButtonVisible = useSelector(state => state.books.nextDetailedBookButtonVisible, shallowEqual);
  
  const dispatch = useDispatch();
  
  const requirePrevious = useCallback(
    debounce(() => dispatch({ type: "PREVIOUS_DETAILS_SHOW" }), 200),
    [dispatch]
  );
  const requireNext = useCallback(
    debounce(() => dispatch({ type: "NEXT_DETAILS_SHOW" }), 200),
    [dispatch]
  );
  
  return singleBookData && singleBookData.volumeInfo ? (
    <section className="details-container details">
      <NavigationFactory />
      <article>
        <Title node={singleBookData.volumeInfo.title} />
        <Cover node={singleBookData?.volumeInfo?.imageLinks?.smallThumbnail} label={"zdjęcie okładki"} />
        <LabelledArray ary={singleBookData.volumeInfo.authors} label="Autorzy" />
        <Paragraph node={singleBookData?.volumeInfo?.publisher} label={"Wydawca"} />
        <Paragraph node={singleBookData?.volumeInfo?.publishedDate} label={"Data wydania"} />
        <Paragraph node={singleBookData?.volumeInfo?.language} label={"Język"} />
        <Paragraph node={singleBookData?.volumeInfo?.pageCount} label={"Stron"} />
        <LabelledArray ary={singleBookData.volumeInfo.categories} label={"Kategorie"} />
        <Description desc={singleBookData?.volumeInfo?.description} />
        <ISBN ary={singleBookData?.volumeInfo?.industryIdentifiers} label={"ISBN"} />
        <Paragraph node={singleBookData?.volumeInfo?.printType} label={"Rodzaj druku"} callback={convertToPolish} />
        <Paragraph node={singleBookData?.saleInfo?.saleability} label={"Dostępna w sprzedaży"} callback={convertToPolish} />
        <Paragraph node={singleBookData?.saleInfo?.isEbook} label={"Jest e-bookiem"} callback={convertToPolish} />
        <Paragraph node={singleBookData?.accessInfo?.textToSpeechPermission} label={"Przygotowana do czytników tekstu"} callback={convertToPolish} />
        <LabelledObject obj={singleBookData?.saleInfo?.listPrice} label={"Cena katalogowa"} />
        <LabelledObject obj={singleBookData?.saleInfo?.retailPrice} label={"Cena detaliczna"} />
        <Link node={singleBookData?.saleInfo?.buyLink} label={"Do sklepu"} />
        <Link node={singleBookData?.accessInfo?.webReaderLink} label={"Przeczytaj fragment"} />
      </article>
    </section>
  ) : null;
};

SingleBook = withRouter(SingleBook);

export default SingleBook;

SingleBook.propTypes = {
  singleBookData: PropTypes.object,
};
