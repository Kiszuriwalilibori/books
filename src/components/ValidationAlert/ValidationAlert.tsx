import { useState } from "react";
import { AlertTitle, Collapse, IconButton, Box, Typography } from "@mui/material";
import { ExpandMore, ExpandLess, Close } from "@mui/icons-material";

import renderConditionally from "hocs/renderConditionally";

import { FieldValidationError, SearchPageField, searchPageFieldPlaceholderMap } from "pages/SearchPage/utils/model";
import StyledAlert, {
  AlertContainer,
  FieldValueTypography,
  ErrorListItem,
  SectionDivider,
  FlexBox,
  FlexGrowBox,
  FlexGapBox,
  MarginBottomTypography,
  PaddedBox,
  MarginBottomBox,
  StyledInfoIcon
} from "./ValidationAlert.styles";

interface Props {
    alertMessage: string;
    fieldErrors?: FieldValidationError[];
    onClose?: () => void;
}

const ValidationAlert = (props: Props) => {
    const { alertMessage, fieldErrors, onClose } = props;
    const [expanded, setExpanded] = useState(false);

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
                        <AlertTitle>Błędy walidacji</AlertTitle>
                        <Typography variant="body2" component="div">
                            {alertMessage}
                        </Typography>
                    </FlexGrowBox>

                    <FlexGapBox>
                        {hasDetailedErrors && (
                            <IconButton size="small" onClick={handleToggleExpanded} aria-label={expanded ? "Ukryj szczegóły" : "Pokaż szczegóły"}>
                                {expanded ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        )}
                        {onClose && (
                            <IconButton onClick={onClose} size="small" aria-label="Zamknij alert">
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
                                Szczegóły błędów:
                            </Typography>

                            <Box>
                                {fieldErrors!.map((fieldError, index) => (
                                    <MarginBottomBox key={`${fieldError.field}-${index}`}>
                                        <MarginBottomTypography variant="body2">
                                            <strong>Pole "{getFieldLabel(fieldError.field)}"</strong>
                                            {fieldError.value && (
                                                <FieldValueTypography component="span">
                                                    "{fieldError.value.length > 30 ? `${fieldError.value.substring(0, 30)}...` : fieldError.value}"
                                                </FieldValueTypography>
                                            )}
                                        </MarginBottomTypography>
                                        <PaddedBox>
                                            {fieldError.errors.map((error, errorIndex) => (
                                                <ErrorListItem key={errorIndex}>
                                                    {error}
                                                </ErrorListItem>
                                            ))}
                                        </PaddedBox>
                                    </MarginBottomBox>
                                ))}
                            </Box>

                            <SectionDivider>
                                <Typography variant="subtitle2" gutterBottom>
                                    <StyledInfoIcon fontSize="small" />
                                    Wymagania dla wszystkich pól:
                                </Typography>
                                <PaddedBox>
                                    <ErrorListItem>
                                        Minimum 2 znaki
                                    </ErrorListItem>
                                    <ErrorListItem>
                                        Co najmniej jedna litera lub cyfra
                                    </ErrorListItem>
                                    <ErrorListItem>
                                        Bez spacji na początku i końcu
                                    </ErrorListItem>
                                    <ErrorListItem>
                                        Bez niedozwolonych znaków specjalnych
                                    </ErrorListItem>
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