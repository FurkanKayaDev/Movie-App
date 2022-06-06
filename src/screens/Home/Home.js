import {View, Text} from 'react-native';
import React from 'react';
import DiscoverMovies from '../../components/DiscoverMovies';
import styles from './Home.styles';
import TrendingPeople from '../../components/TrendingPeople';
import TrendingMovies from '../../components/TrendingMovies/';

const Home = props => {
  return (
    <View style={styles.sectionBg}>
      <DiscoverMovies navigation={props.navigation} />
      <TrendingPeople title="Trending People" url="/trending/person/week" />
      <TrendingMovies
        title="Trending Movies"
        url="/movie/top_rated"
        navigation={props.navigation}
      />
    </View>
  );
};

export default Home;
