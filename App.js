import React, { useState, useEffect } from 'react';
import { StyleSheet, View , FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
   fetchArticles();    
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={ styles.container }>
      <FlatList
        data={ articles}
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
