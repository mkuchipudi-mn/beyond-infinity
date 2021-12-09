import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import SearchCard from '../components/SearchCard';
import SearchCardsService from '../services/SearchCards.service';
import { RootTabScreenProps } from '../types';
import { mapSearchCard } from '../utils/map';

const searchCardsService = new SearchCardsService();
export default function SearchCardsScreen({ navigation }: RootTabScreenProps<'SearchCards'>) {
  
  const [cards, setCards] = React.useState<any>([]);
  
  const init = async () => { 
    const response = await searchCardsService.getSearchCards();
    setCards(mapSearchCard(response.data));
  }
  
  React.useEffect(() => {
    init();
  },[])
  

  if(!cards.length)
    return <ActivityIndicator size="small" color="#0000ff" />
  
  return (
    <ScrollView>
      { cards.map((card: any) => <SearchCard {...card}></SearchCard>)}
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