import { useState } from "react";
import { AlertTitle, Collapse, IconButton, Box, Typography } from "@mui/material";
import { ExpandMore, ExpandLess, Close } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import renderConditionally from "hocs/renderConditionally";

import { FieldValidationError, SearchPageField, searchPageFieldPlaceholderMap } from "pages/SearchPage/utils/model";
import StyledAlert, { AlertContainer, FieldValueTypography, ErrorListItem, SectionDivider, FlexBox, FlexGrowBox, FlexGapBox, MarginBottomTypography, PaddedBox, MarginBottomBox, StyledInfoIcon } from "./ValidationAlert.styles";

interface Props {
    alertMessage: string;
    fieldErrors?: FieldValidationError[];
    onClose?: () => void;
}

const ValidationAlert = (props: Props) => {
    const { alertMessage, fieldErrors, onClose } = props;
    const [expanded, setExpanded] = useState(false);
    const { t } = useTranslation();

    const hasDetailedErrors = fieldErrors && fieldErrors.length > 0;

    const handleToggleExpanded = () => {
        setExpanded(!expanded);
    };

    const getFieldLabel = (fieldName: string): string => {
        return searchPageFieldPlaceholderMap[fieldName as SearchPageField] || fieldName;
    };

    return (
        <AlertContainer>
            <StyledAlert severity="error" role="alert">
                <FlexBox>
                    <FlexGrowBox>
                        <AlertTitle>{t("validation.title")}</AlertTitle>
                        <Typography variant="body2" component="div">
                            {alertMessage}
                        </Typography>
                    </FlexGrowBox>

                    <FlexGapBox>
                        {hasDetailedErrors && (
                            <IconButton size="small" onClick={handleToggleExpanded} aria-label={expanded ? t("validation.hideDetails") : t("validation.showDetails")}>
                                {expanded ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        )}
                        {onClose && (
                            <IconButton onClick={onClose} size="small" aria-label={t("validation.closeAlert")}>
                                <Close />
                            </IconButton>
                        )}
                    </FlexGapBox>
                </FlexBox>

                {hasDetailedErrors && (
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <SectionDivider>
                            <Typography variant="subtitle2" gutterBottom>
                                <StyledInfoIcon fontSize="small" />
                                {t("validation.errorDetails")}:
                            </Typography>

                            <Box>
                                {fieldErrors!.map((fieldError, index) => (
                                    <MarginBottomBox key={`${fieldError.field}-${index}`}>
                                        <MarginBottomTypography variant="body2">
                                            <strong>
                                                {t("validation.field")} "{getFieldLabel(fieldError.field)}"
                                            </strong>
                                            {fieldError.value && <FieldValueTypography component="span">"{fieldError.value.length > 30 ? `${fieldError.value.substring(0, 30)}...` : fieldError.value}"</FieldValueTypography>}
                                        </MarginBottomTypography>
                                        <PaddedBox>
                                            {fieldError.errors.map((error, errorIndex) => (
                                                <ErrorListItem key={errorIndex}>{error}</ErrorListItem>
                                            ))}
                                        </PaddedBox>
                                    </MarginBottomBox>
                                ))}
                            </Box>

                            <SectionDivider>
                                <Typography variant="subtitle2" gutterBottom>
                                    <StyledInfoIcon fontSize="small" />
                                    {t("validation.requirements")}:
                                </Typography>
                                <PaddedBox>
                                    <ErrorListItem>{t("validation.ruleDescriptions.minLength")}</ErrorListItem>
                                    <ErrorListItem>{t("validation.ruleDescriptions.alphanumeric")}</ErrorListItem>
                                    <ErrorListItem>{t("validation.ruleDescriptions.noSpaces")}</ErrorListItem>
                                    <ErrorListItem>{t("validation.ruleDescriptions.noSpecialChars")}</ErrorListItem>
                                </PaddedBox>
                            </SectionDivider>
                        </SectionDivider>
                    </Collapse>
                )}
            </StyledAlert>
        </AlertContainer>
    );
};

export default renderConditionally(ValidationAlert);
