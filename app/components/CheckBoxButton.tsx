import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform,
    View,
    Image,
} from 'react-native';
import AppStyle from 'app/config/styles';
import images from 'app/config/images';
const IS_IOS = Platform.OS === 'ios' ? true : false

interface ButtonProps {
    onPress?: any,
    title?: string,
    btnStyle: any,
    checked: boolean,
    checkboxStyle: any,
    titleStyle: any,
}

export default (props: ButtonProps) => {
    return (

        <View >
            <TouchableOpacity style={[styles.checkBoxBtnView,]} onPress={props.onPress}>


                <Image style={[styles.checkBoxBtn, props.checkboxStyle]}
                    source={props.checked == false ? images.checkBoxUnTick : images.checkBoxTick} />
                <Text style={[styles.checkBoxTitleTxt, props.titleStyle]}>{props.title} </Text>
            </TouchableOpacity>


        </View>



    );
};



const styles = StyleSheet.create({
    btnTxt: {
        textAlign: 'center',
        fontSize: 16,
        color: AppStyle.color.COLOR_WHITE,
        fontFamily: AppStyle.fonts.FONT_BOLD,
        marginBottom: IS_IOS ? 0 : 4,
        marginTop: IS_IOS ? 4 : 0
    },
    checkBoxBtnView:
    {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    checkBoxTitleTxt:
    {
        color: AppStyle.color.COLOR_BLACK,
        textAlign: "left",
        fontSize: 14,
        marginLeft: 8,
        marginTop: 5,
        fontFamily: AppStyle.fonts.FONT_REGULAR,
    },
    checkBoxBtn:
    {
        width: 25,
        height: 25,

    }
})



