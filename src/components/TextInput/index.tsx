import { Input } from './style';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

type Props = TextInputProps & {
    placeholder: string;
}
export function TextInput({placeholder, ...rest}: Props){

    const { COLORS } = useTheme();

    
    return(
        <Input
            {...rest}
            placeholder={placeholder}
            placeholderTextColor= { COLORS.GRAY_300 }
        />
    );
}