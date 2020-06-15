import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri: 'https://picsum.photos/id/10/200/200',
            }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3}>
            test
          </Text>
          <Text>ReactNews</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: "row"
  },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1
  }
});
