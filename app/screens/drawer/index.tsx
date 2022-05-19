import React, { useEffect, useRef, useState } from 'react';
// lytics from 'appcenter-analytics';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import Images from 'app/config/images';
import NavigationService from 'app/navigation/NavigationService';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import commonStyles from 'app/components/CommonStyles';
import PhoneInput from "react-native-phone-number-input";
const CustomDrawerContent: React.FC = ({ navigation }) => {

    const phoneInput = useRef<PhoneInput>(null);
    const [mobileNumber, setMobileNumber] = useState("");
    const [countryCode, setCountryCode] = useState('');
    useEffect(() => {

    }, []);

    const onSubmit = () => {

    }

    const gotoHome = () => {
        NavigationService.navigate('Home')
    }

    return (
        <View style={commonStyles.container}>

            <View style={{ flex: 0.80 }}>

                <KeyboardAwareScrollView style={{ flex: 1 }}>
                    <TouchableOpacity onPress={gotoHome} style={styles.drawerItemStyle}>
                        <Image
                            resizeMode='cover'
                            source={Images.HomeIcon}
                            style={{ height: 18, width: 18 }}
                        />
                        <Text style={styles.drawerItemTxt}>Home</Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </View>


        </View>
    );
};

export default CustomDrawerContent;