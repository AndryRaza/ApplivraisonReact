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

        <View style={styles.container} >
             
            <Text style={styles.title}>Cartes apéros</Text>
            <ScrollView style={styles.gridCard} showsVerticalScrollIndicator={false}>
                <Article navigation={props.navigation} />
                <Article navigation={props.navigation} />
                <Article navigation={props.navigation} />
            </ScrollView>
      
        </View>
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
        marginBottom: 10,
    },

})


export default Carte;