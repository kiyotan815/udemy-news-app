import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

const ListItem = ({ author, imageUrl, title }) => (
  <View style={styles.itemContainer}>
    <View style={styles.leftContainer}>
      {!!imageUrl && (
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: imageUrl }}
        />
      )}
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.text} numberOfLines={3}>
        {title}
      </Text>
      <Text style={styles.subText}>{author}</Text>
    </View>
  </View>
);

ListItem.propTypes = {
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

ListItem.defaultProps = {
  author: 'React news',
  imageUrl: 'https://pucsum.photos/200/300',
  title: 'React',
};


export default ListItem;
