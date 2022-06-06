import {View, Text} from 'react-native';
import React from 'react';
import DiscoverMovies from '../../components/DiscoverMovies';
import styles from './Home.styles';
import TrendingPeople from '../../components/TrendingPeople';
const Home = () => {
  return (
    <View style={styles.sectionBg}>
      <DiscoverMovies />
      <TrendingPeople />
    </View>
  );
};

export default Home;
