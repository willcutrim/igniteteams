import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


export type ButtomTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtomTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    

    min-height: 56px;
    min-width: 56px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

    border-radius: 6px;

    justify-content: center;
    align-items: center;

    margin-top; 6px;
    
`;


export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD}
    `}
`;