import { StyleSheet } from 'react-native';
import AppStyle from 'app/config/styles';
import {
  Platform
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  cardView: {
    width: "99%",
    height: 120,

    backgroundColor: AppStyle.color.COLOR_WHITE,
    borderRadius: 10,
    shadowColor: AppStyle.color.COLOR_LOADER_BG,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 1,
    marginTop: 10,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,

  },

  collectionCardView: {

    width: 200,
    height: 150,
    backgroundColor: AppStyle.color.COLOR_WHITE,
    borderRadius: 10,
    shadowColor: AppStyle.color.COLOR_LOADER_BG,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 1,
    marginTop: 10,
    marginBottom: 2,
    marginLeft: 10,
    marginRight: 10,
  },

  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  titleTxt: {
    fontSize: 16,
    fontFamily: AppStyle.fonts.FONT_BOLD,
    color: AppStyle.color.COLOR_BLACK,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  forgotPassowrdBtn: {
    flexDirection: 'row-reverse',
    marginLeft: 20,
    marginTop: 10,

  },

  buttonTxt: {
    textAlign: 'center',
    fontSize: 13,
    color: AppStyle.color.COLOR_WHITE,
    fontFamily: AppStyle.fonts.FONT_MEDIUM,
    marginBottom: Platform.OS == 'ios' ? 0 : 4,
  },

  btnStyle : {
    marginTop : 30,
  },
  subtitleTxt: {
    fontSize: 14,
    fontFamily: AppStyle.fonts.FONT_MEDIUM,
    color: AppStyle.color.COLOR_BLACK,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  headerTxt: {
    fontSize: 18,
    fontFamily: AppStyle.fonts.FONT_BOLD,
    color: AppStyle.color.COLOR_BLACK,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  labelTxt: {
    fontSize: 14,
    fontFamily: AppStyle.fonts.FONT_REGULAR,
    color: AppStyle.color.TITLE_COLOR,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  }

});

export default styles;
