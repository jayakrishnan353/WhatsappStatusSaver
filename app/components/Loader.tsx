import React from 'react';
import {
    Platform,
    Image, View, StyleSheet, Modal
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import metrics from 'app/config/metrics';
import AppStyle from 'app/config/styles';

interface LoaderProps {
    loading?: boolean,
    style: any
}

export default (props: any) => {
    return (
        <Modal transparent={true} animationType={"none"} visible={true}>
            <View style={localStyle.modalBackground}>
                <View style={localStyle.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        color={AppStyle.color.COLOR_PRIMARY}
                    />
                </View>
            </View>
        </Modal>
        
    );
};


const localStyle = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "#00000040",
    },
    activityIndicatorWrapper: {
        backgroundColor: "#fff",
        height: 100,
        width: 100,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    container: {
        position: 'absolute',
        width: metrics.screenWidth,
        height: metrics.screenHeight,
        backgroundColor: AppStyle.color.COLOR_LOADER_BG,
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})



