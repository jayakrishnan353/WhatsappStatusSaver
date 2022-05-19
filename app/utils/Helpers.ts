import { WToast } from "react-native-smart-tip";
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from "react-native";
import ApiConfig from "app/config/api-config";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { report } from "node:process";
const folderVdeoOptions = {

  maxHeight: 200,
  maxWidth: 200,
  selectionLimit: 0,
  mediaType: 'photo',
  includeBase64: false,

};
const cameraVideoOptions = {
  mediaType: 'photo',
  quality: 1,
  maxHeight: 200,
  maxWidth: 200,
  includeBase64: true,
  saveToPhotos: false,
};
export const showToast = (message: any) => {
    WToast.show({
      data: message,
      textColor: "#ffffff",
      backgroundColor: "#d34200",
      duration: 1500,
      position: WToast.position.TOP,
    });
  };
 
  
  export const imagePicker = () =>  new Promise((resolve) =>   {
  
    Alert.alert(
        'Freshvoice',
        'Choose your Profile picture',
        [
            {
                text: 'Choose From Gallery',
                onPress: () =>

                     launchImageLibrary(folderVdeoOptions, (response) => {
                        console.log(response)
                        console.log(response)
                        if (response.didCancel) {
                         
                            console.log("User cancelled image picker");
                        } else {
                            resolve( response)
                        }
                        // setProfileImgUrl(response)

                    })
            },
            {
                text: 'Open Camera',
                onPress: () =>
                    launchCamera(cameraVideoOptions, (response) => {
                        console.log(response)
                        // setProfileImgUrl(response)
                        if (response.didCancel) {
                     
                            console.log("User cancelled image picker");
                        } else {
                            
                          resolve( response)
                        }
                    })
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
        ],
        { cancelable: false },
    );
  });

  export const getData = async (key: any, json: boolean) => {
    const value = await AsyncStorage.getItem(key);
    return json ? JSON.parse(value) : value;
  };
  
  export const storeData = async (key: any, value: any) => {
    if (value && typeof value !== "string") {
      value = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, value);
  };
  

  export function showMessage(message: string) {
    setTimeout(() => {
      Alert.alert("FreshVoice", message);
    }, 100);
  }

  export const isValidEmail = (val: any) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );
  };
  
  export const checkPasswordRegex = (text : string) =>
  {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      console.log("regex value",regex.test(text))
      if (regex.test(text)) {

          return true;

      }

      return false;
  }
  export const getImageUrl = (imageName: any) => {
    let imageUrl = ApiConfig.IMAGE_URL + imageName;
    return { uri: imageUrl };
  };
  
  export const dayDifferentCalculate = (createDate: any) => {
    let today = new Date();
    let postDate = new Date(createDate);
    let difference = Math.abs(today - postDate) / 1000;
    let days = Math.floor(difference / 86400);
    let hours = Math.floor(difference / 3600) % 24;
    var minutes = Math.floor(difference / 60) % 60;
    var seconds = Math.floor(difference % 60);
  
    if (seconds != 0 && minutes == 0 && hours == 0 && days == 0) {
      if (seconds > 1) {
        return seconds + " secs ago ";
      } else {
        return seconds + " sec ago ";
      }
    } else if (minutes != 0 && hours == 0 && days == 0) {
      if (minutes > 1) {
        return minutes + " mins ago ";
      } else {
        return minutes + " min ago ";
      }
    } else if (hours != 0 && days == 0) {
      if (hours > 1) {
        return hours + " hours ago ";
      } else {
        return hours + " hour ago ";
      }
    } else if (days != 0) {
      if (days > 1) {
        return days + " days ago ";
      } else {
        return days + " day ago ";
      }
    }
  };