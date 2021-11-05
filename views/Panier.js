import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Panier = (props) =>{

    const [step,changeStep] = React.useState(1);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mon panier</Text>
            <View>
                
            </View>
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
    }

})

export default Panier;