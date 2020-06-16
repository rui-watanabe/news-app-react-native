import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListItem from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem 
        author="SampleNews"
        title="test"
        imageUrl="https://picsum.photos/id/10/200/200"
      />
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
