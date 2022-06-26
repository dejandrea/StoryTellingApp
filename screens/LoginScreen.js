import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";
//import * as Google from 'expo-auth-session/providers/google';
import firebase from "firebase";

export default class LoginScreen extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // Não precisamos reautenticar a conexão do Firebase.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser => {
    // Precisamos registrar um Observer (observador) no Firebase Auth para garantir que a autenticação seja inicializada.
    var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      unsubscribe();
      // Verifique se já estamos conectados ao Firebase com o usuário correto.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Crie uma credencial do Firebase com o token de ID do Google.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        // Faça login com a credencial do usuário do Google.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function(result) {
            if (result.additionalUserInfo.isNewUser) {
              firebase
                .database()
                .ref("/users/" + result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  locale: result.additionalUserInfo.profile.locale,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  current_theme: "dark"
                })
                .then(function(snapshot) {});
            }
          })
          .catch(error => {
            // Trate os erros aqui.
            var errorCode = error.code;
            var errorMessage = error.message;
            // O e-mail da conta do usuário que foi usada.
            var email = error.email;
            // O tipo do firebase.auth.AuthCredential que foi usado.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log("Usuário já conectado ao Firebase.");
      }
    });
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behaviour: "web",
        androidClientId:"387188696939-jhasdrvf80tapqea5u1654780hlrjk1e.apps.googleusercontent.com",
        // iosClientId:"387188696939-29crthna78l6m35ejm30chci3mkc0iqr.apps.googleusercontent.com",
        // webClientId:"387188696939-ga5hk8jah44p6ionjrhnniukbsi0rhiq.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e.message);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login com o Google"
          onPress={() => this.signInWithGoogleAsync()}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});