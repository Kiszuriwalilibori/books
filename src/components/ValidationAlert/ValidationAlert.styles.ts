import { styled } from "@mui/material/styles";
import { Alert, Box, Typography, TypographyProps } from "@mui/material";
import { Info } from "@mui/icons-material";

export const StyledAlert = styled(Alert)(({ theme }) => ({
    background: theme.palette.warning.light,
    color: theme.palette.common.black,
    border: `2px solid ${theme.palette.common.black}`,
    fontWeight: "bold",
    margin: `${theme.spacing(5)} auto`,
    maxWidth: "300px",
    boxShadow: "inset 0 0 5px #EE760A",
}));

export const AlertContainer = styled(Box)({
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1300,
    maxWidth: "600px",
    width: "90%",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
});

export const FieldValueTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
    marginLeft: theme.spacing(1),
    fontFamily: "monospace",
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: "2px 4px",
    borderRadius: "3px",
}));

export const ErrorListItem = styled(Typography)({
    display: "flex",
    alignItems: "flex-start",
    "&:before": {
        content: '"•"',
        marginRight: "8px",
        flexShrink: 0,
    },
});

export const SectionDivider = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderTop: "1px solid rgba(0,0,0,0.12)",
}));

export const FlexBox = styled(Box)({
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
});

export const FlexGrowBox = styled(Box)({
    flexGrow: 1,
});

export const FlexGapBox = styled(Box)({
    display: "flex",
    gap: 4, // 0.5 * 8px (default MUI spacing)
});

export const MarginBottomTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

export const PaddedBox = styled(Box)({
    paddingLeft: 8, // 1 * 8px (default MUI spacing)
});

export const MarginBottomBox = styled(Box)({
    marginBottom: 16, // 2 * 8px (default MUI spacing)
});

export const StyledInfoIcon = styled(Info)({
    verticalAlign: "middle",
    marginRight: 8, // 1 * 8px (default MUI spacing)
});

export default StyledAlert;
