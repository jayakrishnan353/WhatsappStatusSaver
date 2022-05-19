import React from 'react';
import {
    View,
    StyleSheet,
    Modal
} from 'react-native';
interface ButtonProps {
    isVisible: boolean
    animationType?: any
    setModalVisible: boolean
    children?: any
    transparent: any,
    onPress: any
    

}
const ModalComponent: React.FC<ButtonProps> = ({
    isVisible = false,
    children,

}) => {
    return (
        <>

            <Modal
                onRequestClose={() => false}
                animationType="fade"
                transparent={true}
                visible={isVisible}

            // {...children}
            >
                <View style={styles.personalModalBg}>
                    <View style={styles.personalModalView}>
                        {children}
                    </View>
                </View>
            </Modal>



        </>
    );
};

export default ModalComponent;
const styles = StyleSheet.create({
    personalModalView: {
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 5,
        paddingVertical: 15,
        width: "100%",
        height: "60%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    personalModalBg:
    {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#0000008c",
    },
})






