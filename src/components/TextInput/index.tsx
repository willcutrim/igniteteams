import { Input } from './style';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';


export function TextInput({...rest}: TextInputProps){

    const { COLORS } = useTheme();

    
    return(
        <Input
            {...rest}
            placeholder='Nome da turma'
            placeholderTextColor= { COLORS.GRAY_300 }
        />
    );
}