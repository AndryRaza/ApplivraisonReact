import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Button, TextInput, Avatar } from 'react-native-paper';

const Login = (props) => {

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(true)

  const show = () => {
    setShowPassword(!showPassword);
  }

  const log = () => {
    props.navigation.navigate('tab');
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={{ justiftyContent: "center", alignItems: "center" }}>
          <Avatar.Icon size={150} icon="glass-cocktail" />
        </View>

      </View>
      <View style={styles.formControl}>
        <TextInput
          mode="outlined"
          label="Nom utilisateur"
          placeholder="John Doe"
          onChange={setLogin}
        />
        <TextInput
          mode="outlined"
          label="Mot de passe"
          secureTextEntry={showPassword}
          onChange={setPassword}
          style={{
            marginTop: 3,
            marginBottom: 10
          }}
          right={<TextInput.Icon name="eye" onPress={show} />}
        />

        <Button icon="login" mode="contained" onPress={log}>
          Connexion
        </Button>
        <Text onPress={()=> props.navigation.navigate('Inscription')} >Pas de compte ? Inscrivez-vous ici</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100
  },
  formControl: {
    padding: 30,
    alignContent: 'center',
    justifyContent: 'center',
    flex: 5
  },
  titleContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
  }
});

export default Login