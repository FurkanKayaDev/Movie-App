import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Constants from '../../Constants';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import styles from './TrendingMovies.styles';

function TrendingMovies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/movie/top_rated');
      setMovies(response.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  const displayMovies = ({item}) => {
    return (
      <View style={{marginHorizontal: 10}}>
        <Image
          style={styles.image}
          source={{uri: `${IMAGE_POSTER_URL}${item.poster_path}`}}
        />
        <Text style={styles.name}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text style={styles.heading}>Trending Movies</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={movies}
            renderItem={displayMovies}
            horizontal
          />
        </View>
      )}
    </View>
  );
}

export default TrendingMovies;
