import {StyleSheet, Dimensions} from 'react-native';
import Constants from '../../Constants';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.baseColor,
    height: deviceHeight,
  },

  image: {
    width: deviceWidth,
    height: 250,
  },
  title: {
    fontSize: 20,
    color: Constants.textColor,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
    textDecoration: 'underline',
    textDecorationThickness: 1,
    textDecorationPosition: 'underline',
    textDecorationSkipInk: 'auto',
    textDecorationJoin: 'miter',
    textDecorationMiterLimit: 4,
  },
  linkcontainer: {
    backgroundColor: Constants.secondaryColor,
    borderRadius: 100,
    padding: 10,
    width: 45,
    marginLeft: 10,
    marginTop: 230,
    position: 'absolute',
  },
  heading: {
    marginTop: 10,
    fontSize: 19,
    color: Constants.fadedColor,
    margin: 10,
  },
  overview: {
    fontSize: 15,
    color: Constants.fadedColor,
    marginHorizontal: 10,
    marginTop: 30,
    textAlign: 'justify',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
  },
  overview_text: {
    fontSize: 15,
    color: Constants.textColor,
    margin: 10,
    textAlign: 'justify',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  budget: {
    color: Constants.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },

  details_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constants.textColor,
    marginRight: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  genre: {
    color: Constants.textColor,
    fontSize: 15,
  },
});

export default styles;
