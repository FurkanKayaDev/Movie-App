import {StyleSheet, Dimensions} from 'react-native';
import Constants from '../../Constants';

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    height: deviceHeight,
  },
});

export default styles;
