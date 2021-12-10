import * as React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SearchCard = ({title , content} : {title:string , content: string}) => (
  <Card style={styles.container}>
     <Card.Content>
      <Title>{ title }</Title>
      <Paragraph>{content}</Paragraph>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});

export default SearchCard;