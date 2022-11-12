import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Input = styled(TextInput)`
    
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_700};
        color: ${theme.COLORS.WHITE};

        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}

    min-height: 56px;
    min-width: 56px;


    border-radius: 6px;
    margin-bottom: 12px;
    padding: 16px;

`;