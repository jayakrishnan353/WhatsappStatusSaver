import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';


interface ButtonProps {
    flatListStyle: any,
    dataArray: any,
    renderItem: any,


}

export default (props: ButtonProps) => {
    return (

        <View >
            <FlatList
                style={[styles.listViewStyle, props.flatListStyle]}
                data={props.dataArray}
                horizontal={true}
                renderItem={props.renderItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    );
};



const styles = StyleSheet.create({
    listViewStyle:
    {
        marginTop: 20,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
    }
})



