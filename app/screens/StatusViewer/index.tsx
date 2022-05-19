import React, { useEffect, } from 'react';
// lytics from 'appcenter-analytics';
import {
    View,
    ImageBackground,
    Image,
    TouchableOpacity,

    Platform,
    Dimensions,
    ToastAndroid,
    PermissionsAndroid
} from 'react-native';
import * as RNFS from 'react-native-fs';
import styles from './styles';

import images from 'app/config/images';
import VideoPlayer from 'react-native-video-player'
import NavigationService from 'app/navigation/NavigationService';
import * as helper from 'app/utils/Helpers'
import Share from 'react-native-share';
import { writeImageIntoFolder, imageToBase64 } from 'app/utils/ImagePickerHelper';
const StatusViewer: React.FC = (navigation,) => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const item = navigation.route.params.itemValue
    const isImage = navigation.route.params.isImage
    console.log(item)
    console.log(isImage)


    useEffect(() => {

    }, []);

    const downloadBtn = async (item: any) => {

        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: "Permission",
                message: "swahiliPodcast needs to read storage "
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  //DO SOMETHING
                  let res = await writeImageIntoFolder(item.path, item.name)
          
            } else {
              console.log(
                "Permission Denied!",
                "You need to give  permission to see contacts"
              );
            }
          } catch (err) {
           console.log(err);
          }
      

        // helper.showToast("Status Saved Successfully")
        ToastAndroid.show("Status Saved Successfully", ToastAndroid.BOTTOM);

    }
    const shareBtn = async (item: any) => {

        RNFS.readFile('file:///' + item.path, 'base64').then((image) => {
            Share.open({
                url: isImage == 0 ? 'data:image/jpeg;base64,' + image : 'data:video/mp4;base64,' + image,
                type: isImage == 0 ? 'image/jpeg' : 'data:video/mp4'
            }).catch((err) => {
                // Handle error
                // ...
            });
        });


    }
    const backBtn = () =>{

        NavigationService.goBack()
    }

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row' ,justifyContent:"space-between",height : 40}}>
                <TouchableOpacity onPress={() => backBtn()} style ={{width : 50,height : 50}}>
                    <Image source={images.Back} style={{ width: 35, height: 20, marginTop: 10, marginLeft: 20, }}resizeMode= 'center' >

                    </Image>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <TouchableOpacity onPress={() => shareBtn(item)} style ={{width : 50,height : 50}}>
                        <Image source={images.Share} style={{ width: 40, height: 40, marginTop: 10, alignSelf: 'flex-end', marginRight: 20, }} resizeMode= 'center'>

                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => downloadBtn(item)} style ={{width : 50,height : 50}}>
                        <Image source={images.Download} style={{ width: 40, height: 40, marginTop: 10, alignSelf: 'flex-end', marginRight: 20, }} resizeMode= 'center'>

                        </Image>
                    </TouchableOpacity>

                </View>
            </View>


            {isImage == 0 ? (
                <Image
                    resizeMode='cover'
                    style={{ height: '80%', width: '90%', marginLeft: 20, marginRight: 10, marginTop: 40, marginBottom: 20, borderRadius: 10, }}
                    source={{ uri: 'file:///' + item.path }}

                />
            ) : (
                <View>

                    <VideoPlayer
                        videoWidth={windowWidth}
                        videoHeight={windowHeight - 50}
                        thumbnail={{ uri: 'file:///' + item.path }}
                        video={{ uri: 'file:///' + item.path }}
                    />
                </View>
            )}

        </View>
    );
};

export default StatusViewer;