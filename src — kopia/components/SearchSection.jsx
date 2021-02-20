import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { validateSearchInput } from "../js/validateSearchInput";
import { createFullPathToAPI } from "../js/createFullPathToAPI";
import { prefixSearchFormInput } from "../js/prefixSearchFormInput";
import fetchBooks from "../js/fetchBooks";
import { cloneDeep } from "lodash";
import { StyledAlert } from "./common/StyledAlert";
import { CustomContainer } from "./common/CustomContainer";
import FadeButton from "./common/FadeButton";
import { fetchFromFavorites } from "../redux/booksReducer";
import { sourcePlaceholders, sourceArrayOfSearchFieldNames } from "../fixtures/fixtures";
import MyTooltip from "../components/common/Tooltip";
import createRedirect from "../js/createRedirect";

const Logo = React.memo(() => <header className="search__logo">Google Books Finder</header>);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      boxShadow: "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16),0 8px 8px rgba(0,0,0,0.20);",
    },
    "& .MuiInputBase-root": {
      color: "white !important",
      fontFamily: "Open Sans, sans-serif !important",
      backgroundColor: "rgba(122, 194, 33, 0.8)",
    },
    "& .MuiFormLabel-root": { color: "white !important" },
    "& .MuiOutlinedInput-notchedOutline": { border: "3px solid", borderColor: "rgb(122, 194, 33)!important" },
  },
}));

const initialValidationSettings = { valid: true, message: "" };
const arrayOfPlaceholders = [...sourcePlaceholders];
const arrayOfSearchFieldNames = [...sourceArrayOfSearchFieldNames];

const Search = props => {
  const { isReadFromFavouritesVisible, fetchFromFavorites } = props;

  const classes = useStyles();

  const [form, setState] = useState({
    authors: "",
    title: "",
    subject: "",
  });

  const [validated, setValidated] = useState(initialValidationSettings);

  const updateField = useCallback(
    e => {
      setState({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form]
  );

  const handleResetForm = () => {
    setState({ authors: "", title: "", subject: "" });
    setValidated(initialValidationSettings);
  };

  const areButtonsVisible = useCallback(() => {
    return Object.values(form).some(item => item !== "");
  }, [form]);

  const history = useHistory();
  const redirect = React.useMemo(createRedirect(history));
  const process = useCallback(() => {
    const isValidated = validateSearchInput(cloneDeep(form));
    setValidated(validated => (validated = isValidated));

    if (isValidated.valid) {
      redirect.connecting();

      fetchBooks(createFullPathToAPI(prefixSearchFormInput(form)), redirect);
    }
  }, [form, redirect]);

  const processFavorites = useCallback(() => {
    fetchFromFavorites();
    redirect.books();
  }, [redirect, fetchFromFavorites]);

  useEffect(() => {
    const form = document.querySelector("#search__form");
    const inputFields = [...form.getElementsByTagName("input")];
    inputFields.forEach(element => {
      element.addEventListener("mouseenter", ev => {
        ev.target.focus();
      });
    });
  }, []);

  return (
    <CustomContainer style={{ alignItems: "unset" }}>
      <Logo />
      <StyledAlert isVisible={validated.valid} message={validated.message} />
      <form className={classes.root} id="search__form">
        {arrayOfSearchFieldNames.map((element, index) => (
          <MyTooltip key={element} title="Nie mniej niż dwa znaki w tym jeden alfanumeryczny" arrow>
            <TextField key={element} label={arrayOfPlaceholders[index]} name={element} id={element} size="small" variant="outlined" onChange={updateField} value={form[element]} />
          </MyTooltip>
        ))}
      </form>
      <div className="search__buttons">
        <FadeButton visible={true} cls={areButtonsVisible() ? "button--ok" : "button--inactive"} fn={areButtonsVisible() ? process : null} text={"Szukaj"} />
        <FadeButton visible={true} cls={areButtonsVisible() ? "button--problem" : "button--inactive"} fn={areButtonsVisible() ? handleResetForm : () => {}} text={"Wyczyść"} />
        <FadeButton visible={true} cls={isReadFromFavouritesVisible ? "button--favorites" : "button--inactive"} fn={isReadFromFavouritesVisible ? processFavorites : null} text={"Ulubione"} />
      </div>
    </CustomContainer>
  );
};

const mapStateToProps = state => ({
  isReadFromFavouritesVisible: state.books.cacheNotEmpty,
});

const mapDispatchToProps = dispatch => ({
  fetchFromFavorites: () => dispatch(fetchFromFavorites()),
});

const SearchSection = withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
export default SearchSection;
