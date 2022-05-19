import {
    StyleSheet,
    Platform
} from 'react-native';
import AppStyle from 'app/config/styles';
import { TextInput, } from 'react-native-paper';

const IS_IOS = Platform.OS === 'ios' ? true : false

interface ButtonProps {
    onChangeText?: any,
    placeHolder?: string,
    txtStyle: any,
    values: string,
    isSecure: boolean,
    showRightIcon: boolean,
    hidePassword: boolean,
    onPress: any,
    showRightButton: boolean,
    returnKeyType: string,
    onSubmitEditing: any
    isEdit: boolean,
    autoCapital: any
}

const FloatingTextInput: React.FC<ButtonProps> = ({
    isSecure = false,
    placeHolder,
    txtStyle,
    values,
    onChangeText,
    onPress,
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
                label=''
                mode='outlined'
                secureTextEntry={isSecure}
                underlineColorAndroid={'rgba(0,0,0,0)'}
                style={[styles.textInput]}

                value={values}
                editable={isEdit}
                onChangeText={onChangeText}
                underlineColor='transparent'
            />



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



