import styled, { css } from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;