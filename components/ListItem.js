import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListItem = ({ imageUrl, title, author }) => {
  return(
    <View style={ styles.itemContainer }>
      <View style={ styles.leftContainer }>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={ styles.rightContainer }>
        <Text title={ styles.subText } numberOfLines={3}>
          { title }
        </Text>
        <Text style={ styles.subText }>{ author }</Text>
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