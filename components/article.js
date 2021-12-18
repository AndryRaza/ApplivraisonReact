import React from "react";
import { Avatar, Button, Card, Title, Paragraph, Surface, IconButton, Colors, List } from 'react-native-paper';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';


const Article = (props) => {

    const redirect = () => {
       props.navigation.navigate('articleDetails',{
           itemId : props.id
       })
    }

    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: props.img }} />
            <Card.Title title={props.title} subtitle={props.description}  right={() => <Text style={styles.prix}>{props.price}</Text>}/>
            <Card.Actions style={{
                justifyContent: 'flex-start'
            }}>
                <IconButton
                    icon="magnify"
                    color={Colors.red500}
                    size={20}
                    onPress={redirect}
                />
                <IconButton
                    icon="cart-plus"
                    color={Colors.red500}
                    size={20}
                />
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({

    card: {
        marginBottom:10
    },
    prix:{
        fontSize:22,
        marginRight:10
    }
})

export default Article;