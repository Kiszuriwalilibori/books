import * as React from "react";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { fetchBooksFromAPI, createRedirect } from "js/utils";

import useStyles from "./styles";
import Paths from "Routing/Paths";

import { PageContainer } from "components";
import { FavoriteButton, Logo, TextFieldWithTooltip } from "./components";
import { validateInput, createFullPathToAPI, prefixSearchFormInput } from "./utils";
import { Alert, Button } from "components";
import { withSnackBarHOC } from "HOCs";
import { SearchFormValues, SearchPageField, searchPageFieldPlaceholderMap, initialValues, initialValidationState } from "./utils/model";

export const SearchPage = () => {
    const classes = useStyles();
    const [validated, setValidated] = React.useState(initialValidationState);
    const history = useNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const redirect = React.useMemo(createRedirect(history), [history]);
    const { values, handleSubmit, getFieldProps, handleReset } = useFormik({
        initialValues,
        onSubmit(formValues: SearchFormValues) {
            const isValidated = validateInput(formValues);
            setValidated(isValidated);
            if (isValidated.valid) {
                history(Paths.connecting);
                fetchBooksFromAPI(createFullPathToAPI(prefixSearchFormInput(formValues)), redirect);
            }
        },
    });

    const areButtonsDisabled = React.useCallback(() => {
        return Object.values(values).join("") === "";
    }, [values]);

    const clearFormAndValidation: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(() => {
        setValidated(initialValidationState);
        handleReset(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageContainer maxWidth={false} disableGutters={true} sx={{ alignItems: "unset" }}>
            <Logo />
            <Alert renderCondition={!validated.valid} message={validated.message} />
            <form className={classes.root} id="search__form">
                {Object.values(SearchPageField).map((fieldName: SearchPageField) => (
                    <TextFieldWithTooltip key={fieldName} label={searchPageFieldPlaceholderMap[fieldName]} {...getFieldProps(fieldName)} />
                ))}
            </form>
            <div className="search__buttons">
                <Button disabled={areButtonsDisabled()} onClick={handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>} className="button--ok" type="submit">
                    Szukaj
                </Button>

                <Button disabled={areButtonsDisabled()} onClick={clearFormAndValidation} className="button--problem" type="reset">
                    Wyczyść
                </Button>

                <FavoriteButton />
            </div>
        </PageContainer>
    );
};

export default connect(null, null)(withSnackBarHOC(SearchPage));
