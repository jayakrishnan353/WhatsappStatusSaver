import React, { useEffect, useState, } from 'react';
// lytics from 'appcenter-analytics';
import {
    View,
    ImageBackground,
    FlatList,
    Image,
    Dimensions,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';

import styles from './styles';
import * as RNFS from 'react-native-fs';
import images from 'app/config/images';
import NavigationService from 'app/navigation/NavigationService';
import RNFetchBlob from 'react-native-fetch-blob';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { isCameraAndGalleryPermission } from 'app/services/PermissionServices';
import { platform } from 'os';
const dirs = RNFetchBlob.fs.dirs;

export function getWhatsappStatusDirectory(isWhatsppBusiness: boolean) {
    console.log("isWhatsppBusiness", isWhatsppBusiness)

    if (isWhatsppBusiness == false) {
        if (Platform.constants.Release >= 11) {
            return dirs.SDCardDir + "/Android/media/com.whatsapp/WhatsApp/Media/.Statuses";
        }
        else {
            return dirs.SDCardDir + "/WhatsApp/Media/.Statuses";
        }
    }
    else {
        if (Platform.constants.Release >= 11) {
            return dirs.SDCardDir + "/Android/media/com.whatsapp.w4b/WhatsApp Business/Media/.Statuses";
        }
        else {
            return dirs.SDCardDir + "/WhatsApp Business/Media/.Statuses";
        }
    }


}
const StatusList: React.FC = (navigation) => {


    const [statusList, setStatusList] = useState([])
    const [noStatus, setNoStatus] = useState(false)
    const numColumns = 2
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [videoList, setVideoList] = useState([])
    const [imageList, setImageList] = useState([])
    const isBusiness = navigation.route.params.isBusiness

    useEffect(() => {


         console.log("relase version",Platform.constants.Release)
        getPermission()
        // getStatus()

        //get a list of files and directories in the main bundle

    }, []);


    const getStatus = () => {
        let status = [];
        RNFetchBlob.fs.ls(getWhatsappStatusDirectory(isBusiness))
            .then(data => {
                status = data
            }).catch(error => {
                console.log(error)
            });
    }
    const getPermission = async () => {
        let cameraPer = await isCameraAndGalleryPermission(false)

        console.log("cameraPer", cameraPer)

        if (cameraPer == true) {


            let path = ''
            if (isBusiness == false) {
                if (Platform.constants.Release >= 11) {
                    path = RNFS.ExternalStorageDirectoryPath + "/Android/media/com.whatsapp/WhatsApp/Media/.Statuses";
                }
                else {
                    path = RNFS.ExternalStorageDirectoryPath + "/WhatsApp/Media/.Statuses";
                }
            }
            else {
                if (Platform.constants.Release >= 11) {
                    path = RNFS.ExternalStorageDirectoryPath + "/Android/media/com.whatsapp.w4b/WhatsApp Business/Media/.Statuses";
                }
                else {
                    path = RNFS.ExternalStorageDirectoryPath + "/WhatsApp Business/Media/.Statuses";
                }
            }
            console.log(RNFS.ExternalStorageDirectoryPath + "/Android/media/com.whatsapp/WhatsApp/Media/.Statuses")
            RNFS.readDir(path)
                .then((result) => {
                    console.log('GOT RESULT', result);
                    setStatusList(result)
                    var imageArray = []
                    var videoArray = []
                    result.forEach((obj) => {

                        console.log("for loop")
                        var fileExt = obj.name.split('.').pop();
                        console.log(fileExt)
                        if (fileExt == 'mp4') {
                            videoArray.push(obj)
                        }
                        else if (fileExt == 'jpg') {
                            imageArray.push(obj)
                        }
                    });

                    setImageList(imageArray)
                    setVideoList(videoArray)

                    //return Promise.all([RNFS.stat(result[0].path), result[0].path]);
                })
                .catch((err) => {
                    console.log(err.message, err.code);
                });
        }
        else {
            setNoStatus(true)
        }


    }
    const grantPermisson = () => {
        getPermission()
    }

    const statusViewerBtn = (item) => {
        console.log("item", item)
        NavigationService.navigate("StatusViewer", { itemValue: item, isImage: selectedIndex })

    }

    const statusItem = ({ item, index }) => {
        //console.log("Item",item)
        console.log("index", index)
        return (

            
            <View style={{ width: windowWidth / 2, height: 250, marginLeft: 10, marginRight: -15, flexDirection: 'column' }}>




                {item.name !== '.nomedia' && (

                    <TouchableOpacity onPress={() => statusViewerBtn(item)} style={{ zIndex: 2 }}>


                        <Image
                            resizeMode='cover'
                            style={{ height: 200, width: windowWidth / 2 - 20, marginLeft: 5, marginRight: 10, marginTop: 20, marginBottom: 20, borderRadius: 10, }}
                            source={{ uri: 'file:///' + item.path }}

                        />

                    {selectedIndex == 2 &&(
<Image
                            resizeMode='cover'
                            style={{ height: 40, width:40, marginLeft: 70,marginTop : -150,}}
                            source={images.VideoPlay}

                        />
                    )}    



                    </TouchableOpacity>



                )}


            </View>
        );
    }
    return (
        <View style={styles.container}>


            <View style={styles.tabStyles}
            >
                <TouchableOpacity style={selectedIndex == 0 ? styles.activeTableStyles : styles.otherTabStyles} onPress={() => setSelectedIndex(0)}>
                    <Text style={selectedIndex == 0 ? styles.activeSummaryTextStyles : styles.summaryTextStyles}>Images</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={selectedIndex == 1 ? styles.activeTableStyles : styles.otherTabStyles} onPress={() => setSelectedIndex(1)}>
                            <Text style={selectedIndex == 1 ? styles.activeTextStyles : styles.textStyles}>Requirement</Text>
                        </TouchableOpacity > */}
                <TouchableOpacity style={selectedIndex == 2 ? styles.activeTableStyles : styles.otherTabStyles} onPress={() => setSelectedIndex(2)}>
                    <Text style={selectedIndex == 2 ? styles.activeSummaryTextStyles : styles.summaryTextStyles}>Videos</Text>
                </TouchableOpacity>

            </View>


            {imageList.length == 0 && selectedIndex == 0 && (

                <View style={{ justifyContent: 'center',flex : 1}}>
                    <Text style={styles.noImageTxt}>No Images Available</Text>
                </View>

            )}
              {console.log("called",videoList.length,selectedIndex )}
            {videoList.length == 0 && selectedIndex == 2 && (

                <View style={{ justifyContent: 'center' ,flex : 1}}>
                  
                    <Text style={styles.noImageTxt}>No Videos Available</Text>
                </View>

            )}
            {noStatus == false ? (

                <FlatList
                    style={{marginTop : 20}}
                    data={selectedIndex == 0 ? imageList : videoList}
                    numColumns={numColumns}
                    renderItem={statusItem}
                    keyExtractor={(item, index) => item.mtime.toString()}
                />
            ) : (

                <View style={{ justifyContent: 'center', alignItems: "center", alignContent: 'center', flex: 1 }}>

                    <TouchableOpacity onPress={grantPermisson} style={styles.whatsappBtnStyle}>
                        <Text style={styles.signUpTxt}>Grant Permisson</Text>
                    </TouchableOpacity>

                </View>

            )}




        </View>
    );
};

export default StatusList;