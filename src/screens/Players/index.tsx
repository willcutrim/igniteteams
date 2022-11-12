import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';


export function Players(){
    return(
        <Container>
            <Header showBackButton/>

            <Highlight
                title='Nome da turma'
                subtitle='adicione a gelara e separe os times'
            />

            <ButtonIcon/>
        </Container>
    );
}