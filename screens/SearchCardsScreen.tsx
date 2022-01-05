import * as React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { ListItem } from 'react-native-elements';
import SearchCard from '../components/SearchCard';
import SearchCardsService from '../services/SearchCards.service';
import { RootTabScreenProps } from '../types';
import { mapSearchCard } from '../utils/map';

const searchCardsService = new SearchCardsService();
export default function SearchCardsScreen({ navigation }: RootTabScreenProps<'Cards'>) {
  const [cards, setCards] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const init = async () => {
    setLoading(true);
    const response = await searchCardsService.getSearchCards();
    setCards(mapSearchCard(response.data));
    setLoading(false);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      init();
    });
    return unsubscribe;
  }, [navigation]);

  if (loading) return <ActivityIndicator size='small' color='#0000ff' />;

  if (!cards.length)
    return (
      <ScrollView>
        <Text>No Cards</Text>
      </ScrollView>
    );

  return (
    <ScrollView>
      {cards.map((card: any) => (
        <ListItem>
          <SearchCard {...card}></SearchCard>
        </ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
});
