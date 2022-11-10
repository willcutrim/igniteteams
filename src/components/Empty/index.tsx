import { Container, Title } from './styles';
import { Text } from 'react-native';


type Props = {
    mensagem: string;
}

export function EmptyList({mensagem}: Props){
    return(
        <Container >
            <Title>
                {mensagem}
            </Title>
        </Container>
    );
}