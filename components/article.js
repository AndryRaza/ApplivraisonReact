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
       props.navigation.navigate('articleDetails')
    }

    return (
        <Card style={styles.card}>
            <Card.Title title="Card Title" subtitle="Card Subtitle" />
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions style={{
                justifyContent: 'flex-end'
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
    }
})

export default Article;