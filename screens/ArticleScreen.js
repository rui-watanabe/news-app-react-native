import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default ArticleScreen = ({ route }) => {
  console.log(route)
  const { url } = route.params;
  console.log(url)

  return(
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  )
}