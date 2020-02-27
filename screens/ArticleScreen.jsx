import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import WebView from 'react-native-webview';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const ArticleScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    {/* TODO nullの時の処理を記述 */}
    <WebView source={{ uri: navigation.getParam('article').url }} />
  </SafeAreaView>
);


ArticleScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default ArticleScreen;
