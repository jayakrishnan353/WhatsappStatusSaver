import React, { useEffect, useState } from 'react';
import AppStyle from 'app/config/styles';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,

} from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import images from 'app/config/images';
import LinearGradient from 'react-native-linear-gradient'
import NavigationService from 'app/navigation/NavigationService';


interface HeaderProps {
    title: string;
    isReset?: boolean;
    showBack?: boolean;
    showRight?: boolean;
    rightOnPress?: any,
    leftOnPress?: any,
    // style?:any;
}

const CustomHeader: React.FC<HeaderProps> = ({
    title,
    isReset = false,
    showBack = false,
    showRight = false,
    rightOnPress,
    leftOnPress
}) => {
    const navigation = useNavigation();

    return (
        <>

            <View style={styles.cardView}>
                <View
                    style={styles.header}
                >
                    {/* Left */}
                    <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center' }}>

                        {showBack &&
                            <TouchableOpacity onPress={() => NavigationService.goBack()}
                                style={styles.headerBackButton}>
                                <Image
                                    resizeMode='contain'
                                    style={{ height: 20, width: 20 }}
                                    source={images.backIcon}
                                />
                            </TouchableOpacity>
                        }

                        {showBack == false && (

                            <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.openDrawer();
                                    }}
                                    style={styles.headerMenuButton}>
                                    <Image
                                        resizeMode='contain'
                                        style={{ height: 20, width: 20 }}
                                        source={images.menuIcon}
                                    />
                                </TouchableOpacity>

                            </View>
                        )}

                    </View>

                    {/* Middle */}
                    <View style={{ flex: 0.6 }}>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    {/* Right */}

                    {showRight &&
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'flex-end' }}>



                            <View style={styles.headerRight}>
                                <TouchableOpacity onPress={rightOnPress}>
                                    <Image
                                        resizeMode='contain'
                                        style={{ height: 20, width: 20, marginRight: 25 }}
                                        source={images.notificationIcon}
                                    />
                                </TouchableOpacity>


                            </View>

                        </View>
                    }
                </View>
            </View >

        </>
    );
};

export default CustomHeader;


const styles = StyleSheet.create({
    cardView:
    {
        backgroundColor: "white",
        alignItems: 'flex-start',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 2,
        shadowOpacity: 0.1,
        height: 80,
        width: '100%'

    },
    header: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        marginTop: 20,
        paddingHorizontal: 10,

    },
    headerBackArrow: {
        //flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'

    },
    headerMenuButton: {
        height: 25,
        width: 25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
    },
    title: {
        color: AppStyle.color.COLOR_BLACK,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: AppStyle.fonts.FONT_BOLD,
    },
    semiTitle:
    {
        color: AppStyle.color.COLOR_WHITE,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: AppStyle.fonts.FONT_MEDIUM,
    },
    headerTxt:
    {
        color: AppStyle.color.COLOR_DARK_SEPERATOR,
        textAlign: 'center',
        fontSize: 14,
        marginLeft: 10,
        fontFamily: AppStyle.fonts.FONT_MEDIUM,
    },

    headerBackButton: {
        height: 25,
        width: 25,
        // justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        //marginTop:25,
    },

    headerRight: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
    },


})



