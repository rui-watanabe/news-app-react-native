import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListItem = (props) => {
  return(
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
        <Text title={styles.subText} numberOfLines={3}>
          test
        </Text>
        <Text style={styles.subText}>{props.author}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    flex: 1,
    padding: 10,
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 10,
    color: "gray"
  }
});

export default ListItem;