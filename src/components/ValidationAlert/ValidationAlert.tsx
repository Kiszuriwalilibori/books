import React, { useState } from "react";
import { AlertTitle, Collapse, IconButton, Box, Typography } from "@mui/material";
import { ExpandMore, ExpandLess, Info, Close } from "@mui/icons-material";

import renderConditionally from "hocs/renderConditionally";
import StyledAlert from "../Alert/Alert.styles";
import { FieldValidationError, SearchPageField, searchPageFieldPlaceholderMap } from "pages/SearchPage/utils/model";

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
        <Box
            sx={{
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1300,
                maxWidth: "600px",
                width: "90%",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            }}
        >
            <StyledAlert severity="error" role="alert">
                <Box display="flex" alignItems="flex-start" width="100%">
                    <Box flexGrow={1}>
                        <AlertTitle>Błędy walidacji</AlertTitle>
                        <Typography variant="body2" component="div">
                            {alertMessage}
                        </Typography>
                    </Box>

                    <Box display="flex" gap={0.5}>
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
                    </Box>
                </Box>

                {hasDetailedErrors && (
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box mt={2} pt={2} borderTop="1px solid rgba(0,0,0,0.12)">
                            <Typography variant="subtitle2" gutterBottom>
                                <Info fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }} />
                                Szczegóły błędów:
                            </Typography>

                            <Box>
                                {fieldErrors!.map((fieldError, index) => (
                                    <Box key={`${fieldError.field}-${index}`} sx={{ mb: 2 }}>
                                        <Typography variant="body2" component="div" sx={{ mb: 1 }}>
                                            <strong>Pole "{getFieldLabel(fieldError.field)}"</strong>
                                            {fieldError.value && (
                                                <Typography
                                                    variant="caption"
                                                    component="span"
                                                    sx={{
                                                        ml: 1,
                                                        fontFamily: "monospace",
                                                        backgroundColor: "rgba(0,0,0,0.05)",
                                                        padding: "2px 4px",
                                                        borderRadius: "3px",
                                                    }}
                                                >
                                                    "{fieldError.value.length > 30 ? `${fieldError.value.substring(0, 30)}...` : fieldError.value}"
                                                </Typography>
                                            )}
                                        </Typography>
                                        <Box sx={{ pl: 1 }}>
                                            {fieldError.errors.map((error, errorIndex) => (
                                                <Typography
                                                    key={errorIndex}
                                                    variant="caption"
                                                    component="div"
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        "&:before": {
                                                            content: '"•"',
                                                            marginRight: "8px",
                                                            flexShrink: 0,
                                                        },
                                                    }}
                                                >
                                                    {error}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            <Box mt={2} pt={2} borderTop="1px solid rgba(0,0,0,0.12)">
                                <Typography variant="subtitle2" gutterBottom>
                                    <Info fontSize="small" sx={{ verticalAlign: "middle", mr: 1 }} />
                                    Wymagania dla wszystkich pól:
                                </Typography>
                                <Box sx={{ pl: 1 }}>
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            "&:before": {
                                                content: '"•"',
                                                marginRight: "8px",
                                                flexShrink: 0,
                                            },
                                        }}
                                    >
                                        Minimum 2 znaki
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            "&:before": {
                                                content: '"•"',
                                                marginRight: "8px",
                                                flexShrink: 0,
                                            },
                                        }}
                                    >
                                        Co najmniej jedna litera lub cyfra
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            "&:before": {
                                                content: '"•"',
                                                marginRight: "8px",
                                                flexShrink: 0,
                                            },
                                        }}
                                    >
                                        Bez spacji na początku i końcu
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            "&:before": {
                                                content: '"•"',
                                                marginRight: "8px",
                                                flexShrink: 0,
                                            },
                                        }}
                                    >
                                        Bez niedozwolonych znaków specjalnych
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Collapse>
                )}
            </StyledAlert>
        </Box>
    );
};

export default renderConditionally(ValidationAlert);
