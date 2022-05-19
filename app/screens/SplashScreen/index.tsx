import React, { useEffect, } from 'react';
// lytics from 'appcenter-analytics';
import {
  View,
  ImageBackground,
  Text,
} from 'react-native';

import styles from './styles';

import images from 'app/config/images';
import NavigationService from 'app/navigation/NavigationService';

const Splash: React.FC = () => {

  

  useEffect(() => {
    setTimeout(() => {
        NavigationService.navigate("Auth")
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>

      <Text style = {styles.signUpTxt}>Whatsapp Status Saver</Text>
      {/* <ImageBackground style={styles.bgImage} source={images.Logo}> */}
      {/* </ImageBackground> */}
    </View>
  );
};

export default Splash;