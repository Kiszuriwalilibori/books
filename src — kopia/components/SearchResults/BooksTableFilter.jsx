import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { filterBooks } from "../../redux/booksReducer";
import { headers } from "../../fixtures/fixtures";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

const removeEmptyFields = obj => {
  for (const x in obj) {
    if (obj[x] === "") delete obj[x];
  }
  return obj;
};

export const FilterField = withStyles({
  root: {
    caretColor: "black",
    backgroundColor: "#FFDD40",
    "& input": { color: "black" },
    "& .MuiFormLabel-root": { display: "none" },
    "& .MuiOutlinedInput-notchedOutline": { border: "1px solid #FFDD40", borderColor: "#FFDD40 !important" },
    "& label": {
      fontSize: "11px",
      maxWidth: "90%",
      whiteSpace: "normal",

      "@media only screen and (max-width: 640px)": {
        fontSize: "calc(8px + 3 * ((100vw - 320px) / 320))",
      },
    },
  },
})(TextField);

const UnconnectedBooksTableFilter = props => {
  const { filter, visibility } = props;
  const [form, setState] = useState({
    Tytuł: "",
    Autorzy: "",
    Język: "",
    Etykiety: "",
    Podtytuł: "",
    Wydano: "",
  });

  const updateField = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    filter(removeEmptyFields({ ...form }));
  }, [form, filter]);

  return visibility ? (
    <tr id="FiltrationArea">
      {headers.map((item, index) => (
        <td key={index}>
          <FilterField label={"filtruj " + item} name={item} id={item} size="small" variant="outlined" margin="none" onChange={updateField} onMouseEnter={e => e.target.focus()} value={form[item]} />
        </td>
      ))}
    </tr>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  filter: data => dispatch(filterBooks(data)),
});

const mapStateToProps = state => ({
  visibility: state.books.areFiltersVisible,
});

const BooksTableFilter = connect(mapStateToProps, mapDispatchToProps)(React.memo(UnconnectedBooksTableFilter));
export default BooksTableFilter;

UnconnectedBooksTableFilter.propTypes = {
  filter: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
};
