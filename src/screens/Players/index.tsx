import { useState } from 'react';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';
import { TextInput } from '@components/TextInput';
import { Filter } from '@components/Filter';

import { FlatList } from 'react-native';
import { PlayerCard } from '@components/PlayerCard';
import { EmptyList } from '@components/Empty';
import { Button } from '@components/Button';


export function Players(){

    const [team, setTeam] = useState('time A');
    const [players, setPlayers] = useState(['willyam', 'Deborah', 'andressa', 'adassah', 'alexandra', 'zaninha']);

    return(
        <Container>
            <Header showBackButton/>

            <Highlight
                title='Nome da turma'
                subtitle='adicione a gelara e separe os times'
            />
            
            <Form>
                <TextInput 
                    placeholder='nome da pessoa'
                    autoCorrect={false}
                />

                <ButtonIcon 
                    icon='add'
                />

            </Form>

            <HeaderList>
                <FlatList
                    data={['time A', 'time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) =>(
                        <Filter
                            title={item}  
                            isActive={team == item}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>
            
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item })=>(
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}

                ListEmptyComponent={() => (
                    <EmptyList
                      mensagem='Não há pessoas nesse time.'
                    />
                  )}

                contentContainerStyle={[
                    {paddingBottom: 50},
                    players.length === 0 && { flex: 1}
                ]}
            />
            
            <Button 
                title='Remover Turma'
                type='SECONDARY'
            />
        </Container>
    );
}