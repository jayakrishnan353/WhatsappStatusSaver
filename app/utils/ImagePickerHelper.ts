import * as ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { isCameraAndGalleryPermission } from '../services/PermissionsServices';
import RNFS from 'react-native-fs';
import moment from 'moment';
import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
const dirPictures = `${Platform.OS === 'ios' ? RNFS.DocumentDirectoryPath : RNFS.ExternalStorageDirectoryPath}/Status Downloader`;
export async function writeImageIntoFolder(filePath :any,filename:any) {

   // const newImageName = filename;
    var fileExt = filename.split('.').pop();
    const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.${fileExt}`;
    const newFilepath = `${dirPictures}/${newImageName}`;
    console.log(dirPictures)
    // await RNFS.mkdir(outputPath);
    return new Promise((resolve, reject) => {
  
  
      console.log("filepath", filePath);
      console.log("new file path", newFilepath)
      RNFS.exists(newFilepath)
        .then((success) => {
          resolve(newFilepath);
          console.log('File Exists!'); // <--- here RNFS can read the file and returns this
        })
        .catch((err) => {
          reject(err);
          console.log("Exists Error writeImageIntoFolder: " + err.message);
        });
  
      RNFS.mkdir(dirPictures)
        .then(() => {
          RNFS.copyFile(filePath, newFilepath)
            .then(() => {
              console.log('FILE MOVED', filePath, newFilepath);
              resolve(newFilepath);
            })
        })
        .catch(err => {
          console.log('mkdir error', err);
          reject(err);
        });
    });
  };
  export async function imageToBase64(filePath : any) {


    return new Promise((resolve, reject) => {
  
  
      console.log("called")
  
      RNFS.readFile(filePath, 'base64')
        .then((success) => {
  
          // console.log("sucess",success)
          resolve('data:image/jpeg;base64,' + success);
          // <--- here RNFS can read the file and returns this
        })
        .catch((err) => {
          reject(err);
          console.log("Exists Error imageToBase64: " + err.message);
        });
  
    });
  };