import * as React from "react";
import { toggleFilters } from "../../redux/booksReducer";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";

const Toggler = props => {
  const { toggle } = props;
  const debouncedToggle = React.useCallback(
    debounce(() => toggle(), 200),
    []
  );
  return (
    <button className="button button--ok button-long" onClick={debouncedToggle}>
      Ukryj/pokaż filtry
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  toggle: e => {
    dispatch(toggleFilters());
  },
});

const FiltersVisibilityToggler = connect(null, mapDispatchToProps)(Toggler);
export default FiltersVisibilityToggler;

Toggler.propTypes = {
  toggle: PropTypes.func.isRequired,
};
