import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import { getPacks } from '../components/data';

import Article from '../components/article';
import { FAB } from 'react-native-paper';




const Carte = (props) => {

    const [data, setData] = React.useState(null);

    const redirect = () => {
        props.navigation.navigate('Panier')
    }

    React.useEffect(() => {
        getPacks().then((res) => {
            setData(res)
        }
            ,
            (err) => {
                console.log('erreur : ', err)
            })
    }, [])

    const renderData = () =>{
        let tab = [];
        data.map((elt,key)=>{
            let img = "";
            if(elt.img)
            {
                img = elt.img
            }
            else
            {
                img ='https://picsum.photos/700'
            }
            tab.push(
                <Article navigation={props.navigation} key={key} title={elt.name} price={elt.prix+"€"} description={elt.description} img={img} id={elt.id}/>
            )
        })
        return tab;
    }

    return (

        <View style={styles.container} >

            <Text style={styles.title}>Cartes apéros</Text>
            <ScrollView style={styles.gridCard} showsVerticalScrollIndicator={false}>
                {/* <Article navigation={props.navigation} />
                <Article navigation={props.navigation} />
                <Article navigation={props.navigation} /> */}
                {
                    data? 
                    renderData():
                    null
                }
            </ScrollView>
            <FAB
                style={styles.fab}

                icon="cart"
                color='white'
                onPress={redirect}
            />

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
    gridCard: {
        paddingHorizontal: 20
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})


export default Carte;