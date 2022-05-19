
import {

    StyleSheet,
    Platform,
    View,
    TextInput,
} from 'react-native';
import AppStyle from 'app/config/styles';


const IS_IOS = Platform.OS === 'ios' ? true : false

interface ButtonProps {
    onChangeText?: any,
    placeHolder?: string,
    txtStyle: any,
    values: string,
    returnKeyType: string,
    onSubmitEditing: any
    isEdit: boolean,
    autoCapital: any
}

const CommonTextView: React.FC<ButtonProps> = ({

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
            <View>
                <TextInput style={[styles.textInput, txtStyle]}
                    multiline
                    value={values}
                    placeholder={placeHolder}
                    placeholderTextColor='#D7E0E7'
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                    autoCapitalize={autoCapital !== '' ? autoCapital : 'none'}

                />
            </View>



        </>
    );
};

export default CommonTextView;


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
        height: 150,
        width: "90%",
        marginLeft: 20,
        borderColor: AppStyle.color.COLOR_GREY,
        borderWidth: 1,
        // marginBottom: 10,
        borderRadius: 10,
        marginTop: 20,
        textAlignVertical: "top",
    },
})



