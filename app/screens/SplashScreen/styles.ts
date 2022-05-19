import AppStyles from 'app/config/styles';
import { AppState, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#174b2d',
    justifyContent : 'center',
  },

  bgImage: {
    flex: 1,
    height : 100,
    width : 100,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  signUpTxt: {
    color: 'white',
    textAlign: "center",
    fontSize: 30,
    fontFamily : AppStyles.fonts.FONT_BOLD

    //fontFamily: AppStyle.fonts.ROBOTO_FONT_BOLD,
  },
 
});

export default styles;