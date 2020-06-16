import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles.json';

export default function App() {
  const items = articles.map((article, index) => {
    return(
      <ListItem 
        author={ article.author }
        title={ article.title }
        imageUrl={ article.urlToImage }
        key = { index }
      />
    )
  })
  return (
    <View style={ styles.container }>
      { items }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
