import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';



import Article from '../components/article';
import Panier from './Panier';




const Carte = (props) => {


    return (

        <ScrollView style={styles.container}>
             
            <Text style={styles.title}>Cartes apéros</Text>
            <View style={styles.gridCard}>
                <Article navigation={props.navigation} />
            </View>
      
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 10
    },
    gridCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        paddingBottom: 50
    },
    card: {
        width: 150,
        margin: 5
    }
})


export default Carte;