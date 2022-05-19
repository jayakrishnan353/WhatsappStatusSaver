import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform
} from 'react-native';
import AppStyle from 'app/config/styles';
import images from 'app/config/images';
import NavigationService from 'app/navigation/NavigationService';
import { TextInput, Colors } from 'react-native-paper';

const IS_IOS = Platform.OS === 'ios' ? true : false

interface ButtonProps {
    onChangeText?: any,
    placeHolder?: string,
    txtStyle?: any,
    values?: string,
    isSecure?: boolean,
    returnKeyType?: string,
    onSubmitEditing?: any
    isEdit?: boolean,
    autoCapital?: any
}

const FloatingTextInput: React.FC<ButtonProps> = ({
    isSecure = false,
    placeHolder,
    txtStyle,
    values,
    onChangeText,
    returnKeyType,
    onSubmitEditing,
    isEdit,
    autoCapital = ""
}) => {
    return (
        <>



            <TextInput
                theme={{
                    colors: {
                        text: AppStyle.color.COLOR_BLACK,
                        primary: AppStyle.color.COLOR_GREY,
                        background: AppStyle.color.COLOR_WHITE,
                    },
                    // fonts: {
                    //     regular: {
                    //       fontFamily: AppStyle.fonts.FONT_REGULAR,
                    //      fontWeight:'bold'
                    //     }
                    // }
                }}

                style={[styles.textInput, txtStyle]}
                selectionColor="#000"
                label={placeHolder}
                autoCapitalize={autoCapital !== '' ? autoCapital : 'none'}
                autoCorrect={false}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                value={values}
                editable={isEdit}
                secureTextEntry={isSecure}
                placeholder={placeHolder}
                onChangeText={onChangeText}
            >

            </TextInput>



        </>
    );
};

export default FloatingTextInput;


const styles = StyleSheet.create({
    btnTxt: {
        textAlign: 'center',
        fontSize: 19,
        color: AppStyle.color.COLOR_WHITE,
        fontFamily: AppStyle.fonts.FONT_BOLD,
        marginBottom: IS_IOS ? 0 : 4,
        marginTop: IS_IOS ? 4 : 0
    },

    textInput: {
        marginTop: 4,
        width: '90%',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 10,
        fontFamily: AppStyle.fonts.FONT_REGULAR,
        paddingHorizontal: -10,
        backgroundColor: AppStyle.color.COLOR_WHITE,
    },
})



