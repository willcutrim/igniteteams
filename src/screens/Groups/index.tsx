import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { EmptyList } from '@components/Empty';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';




export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }


  return (
    <Container>
        <Header/>
        
        <Highlight
          title='Turmas'
          subtitle='Jogue com sua turma'
        />
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item} 
            />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <EmptyList
              mensagem='Bora cadastrar as turmas?'
            />
          )}
        />
        <TouchableOpacity>
          <Button
            title='Criar nova turma'
            onPress={handleNewGroup}
          />

        </TouchableOpacity>
    </Container>
  );
}
