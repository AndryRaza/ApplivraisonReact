import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { TextInput, Button, Snackbar } from "react-native-paper";

const Panier = (props) => {

    const [step, changeStep] = React.useState(1);
    const [lastName, setlastName] = React.useState(null);
    const [firstName, setfirstName] = React.useState(null);
    const [phoneNumber, setphoneNumber] = React.useState(null);
    const [adress,setAdress] = React.useState(null);

    const [valid, setValid] = React.useState(true);
    const [visible, setVisible] = React.useState(false);

    const validFunc = () => {
        if (!lastName && !firstName && !phoneNumber) {
            setVisible(true)
        }
    }

    const onDismissSnackBar = () => setVisible(false);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Détails</Text>
            </View>
            <View style={styles.formControl}>
                <Text style={styles.title}>Informations pour la commande</Text>

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
                    label="Téléphone"
                    placeholder="Numéro de téléphone"
                    onChange={setphoneNumber}

                />

                <TextInput
                mode="outlined"
                label="Adresse"
                onChange={setAdress}
                multiline={true}
                />
                <Button style={styles.button} color="red" mode="contained" onPress={validFunc}> Valider </Button>
            </View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
            >
                Veuillez remplir tous les champs.
            </Snackbar>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formControl: {
        padding: 30,
        //flex: 1,
    },
    titleContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    },
    button: {
        marginTop: 10
    },
    error: {
        borderColor: 'red'
    },
    adress:{
        height:100
    }
});


export default Panier;