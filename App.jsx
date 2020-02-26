import React, { useState, useEffect } from 'react';
import {
  StyleSheet, FlatList, SafeAreaView,
} from 'react-native';
import axios from 'axios';
import ListItem from './components/ListItem';
import { newsApiKey } from './constants';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${newsApiKey}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      setArticles([]);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}
