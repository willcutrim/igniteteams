import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TextInput } from '@components/TextInput';
import { Container, Content, Icon } from './styles';



export function NewGroup(){
    return(
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon/>

                <Highlight
                    title='Nova turma'
                    subtitle='crie um turma para adicionar novas pessoas'
                />
                <TextInput
                    placeholder='adicionar turmas'
                />
                <Button
                    title='Criar'
                />
            </Content>
        </Container>
    );
}