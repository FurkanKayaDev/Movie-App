import {StyleSheet} from 'react-native';
import Constants from '../../Constants';

const styles = StyleSheet.create({
  heading: {
    fontSize: 19,
    color: Constants.fadedColor,
    margin: 10,
  },
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 500,
  },
  name: {
    width: 60,
    color: Constants.textColor,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
