import AppStyle from 'app/config/styles';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';



export default (props: any) => {
    return (


        <TouchableOpacity
            style={[styles.worksBtn, props.style]}
            //  mode="contained"
            onPress={props.onPress}
            {...props}
        >
            <Text style={styles.signUpTxt}>{props.title}</Text>
        </TouchableOpacity>

    );
};



const styles = StyleSheet.create({
    worksBtn:
    {
        height: 40,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 4,
        backgroundColor: '#797979'
    },
    signUpTxt: {
        textAlign: 'center',
        fontSize: 18,
        color: AppStyle.color.COLOR_WHITE,
        fontFamily: AppStyle.fonts.FONT_REGULAR,
    },
    linearGradient: {
        height: 40,
        width: "90%",
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginLeft: 15,
        marginTop: 20,
    },
})



