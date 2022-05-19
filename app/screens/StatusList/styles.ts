import AppStyles from 'app/config/styles';
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#174b2d',
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
 
  whatsappBtnStyle:{
    width : '80%',
    marginTop : 20,
    height : 50,
    backgroundColor : "green",
    justifyContent : 'center',
    alignItems:'center',
    alignContent:'center',
    borderRadius : 10,
  },
  activeTableStyles: {
    backgroundColor: "white",
    height: 45,
    width: 150,
    marginTop: 5,
    borderRadius: 25,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
  },
  activeSummaryTextStyles: {
    color: AppStyles.color.COLOR_BLACK,
    fontFamily: AppStyles.fonts.FONT_MEDIUM,
    // left: 25,
    textAlign: "center",
    // position: 'absolute'
  },
  summaryTextStyles: {
    color: AppStyles.color.COLOR_GREY,
    fontFamily: AppStyles.fonts.FONT_MEDIUM,
    //left: 25,
    textAlign: "center",
    //position: 'absolute'
  },
  otherTabStyles: {
    backgroundColor: "#0000",
    height: 45,
    width: 150,
    marginTop: 5,
    marginLeft: 5,
    marginRight: -5,
    borderRadius: 25,
    justifyContent: "center",
  },
  tabStyles: {
    width: "95%",
    height: 55,
    backgroundColor: "#E1DFD9",
    marginTop: Platform.OS == "ios" ? 20 : 25,
    marginLeft: 10,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  noImageTxt:{
    textAlign : 'center',
    fontSize: 14,
    color: 'white',
    fontFamily: AppStyles.fonts.FONT_BOLD,
  },
  signUpTxt: {
    color: 'white',
    textAlign: "left",
    fontSize: 14,

    //fontFamily: AppStyle.fonts.ROBOTO_FONT_BOLD,
  },
});

export default styles;