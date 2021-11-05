import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { TextInput, Button } from "react-native-paper";


const Inscription = () => {

    const [lastName, setlastName] = React.useState(null);
    const [firstName, setfirstName] = React.useState(null);
    const [nickname, setNickname] = React.useState(null);
    const [password, setpassword] = React.useState(null);
    const [phoneNumber, setphoneNumber] = React.useState(null);
    const [showPassword, setShowPassword] = React.useState(true);

    const [valid, setValid] = React.useState(true);

    const validFunc = () => {
        if (!lastName && !firstName && !nickname && !password && !phoneNumber)
        {
            setValid(false)
        }
    }

    const show = () => {
        setShowPassword(!showPassword);
    }


    return (
        <View style={styles.formControl}>

            <Text style={styles.title}>Inscription</Text>

            <TextInput
                mode="outlined"
                label="Nom"
                placeholder="Nom de famille"
                onChange={setlastName}
            />

            <TextInput
                mode="outlined"
                label="Prénom"
                placeholder="Prénom"
                onChange={setfirstName}
            />

            <TextInput
                mode="outlined"
                label="Pseudo"
                placeholder="Ce pseudo vous servira à vous connecter"
                onChange={setNickname}
            />

            <TextInput
                mode="outlined"
                label="Mot de passe"
                placeholder="À ne pas partager"
                onChange={setpassword}
                secureTextEntry={showPassword}
                right={<TextInput.Icon name="eye" onPress={show} />}
            />

            <TextInput
                mode="outlined"
                label="Téléphone"
                placeholder="Numéro de téléphone"
                onChange={setphoneNumber}
 
            />
            {
                valid ? null : <Text>Veuillez remplir et vérifier  tous les champs</Text>
            }
            <Button style={styles.button} color="red" mode="contained" onPress={validFunc}> Valider </Button>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    formControl: {
        padding: 30,
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize:20,
        marginBottom:10
    },
    button: {
        marginTop: 10
    },
    error:{
        borderColor : 'red'
    }
});


export default Inscription;