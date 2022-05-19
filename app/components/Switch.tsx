import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform,
    Switch,
    View,
} from 'react-native';
import AppStyle from 'app/config/styles';
import images from 'app/config/images';
import LinearGradient from 'react-native-linear-gradient'
import NavigationService from 'app/navigation/NavigationService';

const IS_IOS = Platform.OS === 'ios' ? true : false

interface ButtonProps {
    onPress?: any,
    title?: string,
    btnStyle: any,
    isEnable:boolean,
    onChange : any,
    switchViewStyle : any,
    titleStyle : any,
}

export default (props: ButtonProps) => {
    return (

        <View style = {[styles.switchView,props.switchViewStyle]}>
            <Text style = {styles.switchTxt}>{props.title}</Text>
   <Switch
        style={styles.switch}
        trackColor={{ false: AppStyle.color.SWITCH_TRACK_OFF_COLOR, true: AppStyle.color.SWITCH_TRACK_OFF_COLOR }}
        thumbColor={props.isEnable ? AppStyle.color.SWITCH_THUMB_ON_COLOR : AppStyle.color.SWITCH_THUMB_OFF_COLOR}
        ios_backgroundColor="#c0c0c0"
        onValueChange={props.onChange}
        value={props.isEnable}
    />
        </View>
     

    );
};



const styles = StyleSheet.create({
    switch: {
        alignItems: "center",
      },
      switchView : 
      {
        flexDirection:'row',
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        justifyContent:'space-between',
        alignItems:'center'
      },
      switchTxt: {
      //  textAlign: 'auto',
        fontSize: 16,
        color: AppStyle.color.COLOR_BLACK,
        fontFamily: AppStyle.fonts.FONT_REGULAR,
        marginBottom: IS_IOS ? 0 : 4,
        marginTop: IS_IOS ? 4 : 0,
       marginLeft:10,
        marginRight:20,
    },
    linearGradient: {
        height: 55,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        backgroundColor: AppStyle.color.COLOR_PRIMARY
    },
})



