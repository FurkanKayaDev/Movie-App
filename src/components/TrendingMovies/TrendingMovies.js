import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Constants from '../../Constants';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import styles from './TrendingMovies.styles';
import Loading from '../Loading';

function TrendingMovies(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET(props.url);
      setMovies(response.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  const displayMovies = ({item}, props) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('Details', {movieId: item.id});
        }}
        style={{marginHorizontal: 8}}>
        <Image
          style={styles.image}
          source={{uri: `${IMAGE_POSTER_URL}${item.poster_path}`}}
        />
        <Text style={styles.name}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <Text style={styles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={movies}
            renderItem={item => displayMovies(item, props)}
            horizontal
          />
        </View>
      )}
    </View>
  );
}

export default TrendingMovies;
