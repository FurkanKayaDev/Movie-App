import {StyleSheet} from 'react-native';
import Constants from '../../Constants';

const styles = StyleSheet.create({
  heading: {
    fontSize: 19,
    color: Constants.fadedColor,
    margin: 10,
    marginTop: 20,
  },
  image: {
    height: 250,
    width: 150,
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
