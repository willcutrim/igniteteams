import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';


export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`

    width: 56px;
    height: 60px;

    justify-content: center;
    align-items: center;

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px; 

    

    background-color: ${({ theme }) => theme.COLORS.GRAY_700}
    /* margin-left: 12px; */
`;


export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
    
}))``;