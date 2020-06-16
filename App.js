import React from 'react';
import { StyleSheet, View , FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles.json';

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
          author={ item.author }
          title={ item.title }
          imageUrl={ item.urlToImage }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
