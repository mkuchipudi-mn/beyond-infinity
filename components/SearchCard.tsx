import * as React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

const SearchCard = ({ title, content }: { title: string; content: string }) => (
  <Card mode='outlined' style={styles.container}>
    <Text style={styles.paragraph}>{title}</Text>
    <Paragraph style={styles.content}>{content}$</Paragraph>
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
    textAlign: 'left',
  },
  content: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 20,
    color: 'green'
  }
});

export default SearchCard;
