import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Constants from '../../Constants';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import styles from './TrendingPeoples.styles';
import Loading from '../Loading';

const TrendingPeople = props => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      const response = await GET(props.url);
      setPeople(
        props.isForPage === 'details' ? response.cast : response.results,
      );
      setLoading(false);
    };
    getPeople();
  }, []);

  const displayPeople = ({item}) => {
    return (
      <View style={{marginHorizontal: 6}}>
        <Image
          style={styles.image}
          source={{uri: `${IMAGE_POSTER_URL}${item.profile_path}`}}
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>
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
            data={people}
            renderItem={displayPeople}
            horizontal
          />
        </View>
      )}
    </View>
  );
};

export default TrendingPeople;
