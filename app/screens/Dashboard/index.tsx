
import React, { useEffect, } from 'react';
// lytics from 'appcenter-analytics';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  BackHandler,
} from 'react-native';

import styles from './styles';

import images from 'app/config/images';
import NavigationService from 'app/navigation/NavigationService';
import { isCameraAndGalleryPermission } from 'app/services/PermissionServices';

const Dashboard: React.FC = ({ navigation }) => {

  

  useEffect(() => {

    const backAction = () => {
        if (navigation.isFocused()) {
            BackHandler.exitApp();
            // return true;
        }
    };
    getPermission()
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    return () => backHandler.remove();
  
  }, []);

  const getPermission = async () => {
    let cameraPer = await isCameraAndGalleryPermission(false)



  }

  const whatsapp = () =>{
      console.log("whatsapp clicked")
      NavigationService.navigate("StatusList",{ isBusiness : false})


  }

  const whatsappBusiness = () =>{
    NavigationService.navigate("StatusList",{ isBusiness : true})
}

  return (
    <View style={styles.container}>

        <Image source={images.Logo} style = {{width : 200,height : 200,borderRadius : 10,alignSelf :'center',marginTop : 40,}}>

        </Image>
        <View style = {{justifyContent : 'center',alignItems:"center",alignContent:'center',flex : 1}}>
        <TouchableOpacity onPress={whatsapp} style = {styles.whatsappBtnStyle}>
         <Text style = {styles.signUpTxt}>Whatsapp</Text>
         </TouchableOpacity >
         <TouchableOpacity onPress={whatsappBusiness} style = {styles.whatsappBtnStyle}>
         <Text style = {styles.signUpTxt}>Whatsapp Business</Text>
             </TouchableOpacity>
        </View>
   
    </View>
  );
};

export default Dashboard;