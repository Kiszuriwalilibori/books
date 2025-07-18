import React from "react";
import { Stack, StackProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledStack = styled(Stack)(({ theme }) => ({
    paddingTop: theme.spacing(5),
    alignItems: "center",
}));

interface CenteredButtonStackProps extends Omit<StackProps, "alignItems" | "sx"> {
    children: React.ReactNode;
}

export const CenteredButtonStack: React.FC<CenteredButtonStackProps> = ({ children, spacing = 2, ...otherProps }) => {
    return (
        <StyledStack spacing={spacing} {...otherProps}>
            {children}
        </StyledStack>
    );
};

export default CenteredButtonStack;
