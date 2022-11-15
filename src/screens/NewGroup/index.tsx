import { useNavigation } from '@react-navigation/native';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TextInput } from '@components/TextInput';
import { Container, Content, Icon } from './styles';
import { useState } from 'react';
import { groupCreate } from '@storage/group/groupCreate';



export function NewGroup(){

    const [group, setGroup] = useState('');

    const navigation = useNavigation();

    async function handleNew(){
        try {
            await groupCreate(group);
            navigation.navigate('players', { group })
        } catch (error) {
          console.log(error);
        }
    }

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
                    onChangeText={setGroup}
                />
                <Button
                    title='Criar'
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}