import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#174b2d',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf:'center'
  },

  socialIcon:
  {
    width:30,
    height:30,
    borderRadius:15,
    marginLeft:0,
    marginRight:20,
  },
  signUpView: {
    width: "100%",
    height: 20,
    marginTop: 50,
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 70,
    //position:'absolute',
    //top:250,
  },
  signUpTxt: {
    color: 'white',
    textAlign: "left",
    fontSize: 14,

    //fontFamily: AppStyle.fonts.ROBOTO_FONT_BOLD,
  },
  forgotPwd: {
    alignItems: "flex-start",
    marginRight: 10,
    marginTop: 20,
    flexDirection: "row",
    height:50,
    //backgroundColor:'red'

  },
  forgotPwdTxt: {
    color: 'black',
    textAlign: "left",
    fontSize: 14,
    marginLeft: 8,
    
    
  },
  whatsappBtnStyle:{
    width : '80%',
    marginTop : 20,
    height : 50,
    backgroundColor : "green",
    justifyContent : 'center',
    alignItems:'center',
    alignContent:'center',
    borderRadius : 10
  },
  fontTxt: {
    color: 'black',
    textAlign: "left",
    fontSize: 14,
    
  },
  TermsCondTxt: {
    color: 'black',
    textAlign: "left",
    //marginRight:10,
    fontSize: 14,
    textDecorationLine: "underline",
   
  },
  checkBoxBtn: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
 
});

export default styles;