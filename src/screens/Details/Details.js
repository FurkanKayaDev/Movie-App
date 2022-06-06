import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {GET} from '../../Services/API';
import Loading from '../../components/Loading';
import styles from './Details.styles';
import {IMAGE_POSTER_URL} from '../../config';
import Icon from 'react-native-vector-icons/Entypo';
import Constants from '../../Constants';
import TrendingMovies from '../../components/TrendingMovies';

const Details = ({route}, props) => {
  const {movieId} = route.params;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      const response = await GET(`/movie/${movieId}`);
      setDetails(response);
      setLoading(false);
      console.log(response);
    };
    getDetails();
  }, []);

  const getGenres = () => {
    return details.genres.map(genre => (
      <View style={styles.genreContainer}>
        <Text style={styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={styles.image}
            />
          </View>
          {details.homepage ? (
            <View style={styles.linkcontainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(details.homepage);
                }}>
                <Icon name="link" color={Constants.textColor} size={22} />
              </TouchableOpacity>
            </View>
          ) : null}
          <Text style={styles.title}>{details.title}</Text>
          <View>
            <Text style={styles.heading}>OVERVIEW</Text>
            <Text style={styles.overview_text}>{details.overview}</Text>
          </View>
          <View style={styles.details_container}>
            <View>
              <Text style={styles.heading}>BUDGET</Text>
              {details.budget === 0 ? (
                <Text style={styles.budget}>N/A</Text>
              ) : (
                <Text style={styles.budget}>{details.budget}$</Text>
              )}
            </View>
            <View>
              <Text style={styles.heading}>DURATION</Text>
              <Text style={styles.budget}>{details.runtime} min</Text>
            </View>
            <View>
              <Text style={styles.heading}>RELEASE DATE</Text>
              <Text style={styles.budget}>{details.release_date}</Text>
            </View>
          </View>
          <Text style={styles.heading}>GENRE</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 10,
            }}>
            {getGenres()}
          </View>
          <TrendingMovies
            title="SIMILAR MOVIES"
            navigation={props.navigation}
            url={`/movie/${movieId}/similar`}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Details;
