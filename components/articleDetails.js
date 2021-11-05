import React from "react";

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    ImageBackground,
    Alert
} from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };
import { Avatar, Button, IconButton, Colors, FAB } from 'react-native-paper';

const ArticleDetails = () => {
    
    return (
        <View style={style.container}>
            <View style={style.container}>
                <View style={style.titleContainer}>
                    <ImageBackground source={image} resizeMode="cover" style={style.image} />
                    <View >
                        <FAB
                        style={style.fab}
                            small
                            icon="cart-plus"
                        />
                    </View>
                </View>
                <ScrollView style={style.description}>
                    <Text style={style.title}>PACK CHAMPAGNE</Text>
                    <Text>
                        - 1 Moët + chips + cacahuètes + olive : 70€
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        - 1 Moët nectar impérial + chips + cacahuètes + olives : 85€
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        flex:0.5,
    },
    description: {
        flex: 1,
        padding: 20
    },
    image: {
        flex: 1,
        justifyContent: "center",
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        overflow: 'hidden'
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center'
    },
    fab: {
        position: 'absolute',
        zIndex: 2,
        margin: 16,
        right: -10,
        bottom: -30,
    },
})

export default ArticleDetails;