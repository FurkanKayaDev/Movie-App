import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Constants from '../../Constants';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import styles from './TrendingPeoples.styles';

const TrendingPeople = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      const response = await GET('/trending/person/week');
      setPeople(response.results);
      setLoading(false);
    };
    getPeople();
  }, []);

  const displayPeople = ({item}) => {
    return (
      <View style={styles.container}>
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
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text style={styles.heading}>Trending People</Text>
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
