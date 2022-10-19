# Instalações Necessárias:

### Aula 81

yarn add @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

yarn add @react-navigation/bottom-tabs

yarn add @react-navigation/drawer

add linha: plugins:['react-native-reanimated/plugin'],
em babel.config.js dentro do return

yarn --reset-cache

### Aula 82

yarn add @react-navigation/material-bottom-tabs react-native-paper
yarn add react-native-responsive-fontsize
expo install expo-font
expo install expo-app-loading

### Aula 83

yarn add react-native-dropdown-picker

### Aula 84

yarn add @react-navigation/stack
expo install expo-speech

### Aula 85

SDK 44
yarn add firebase@^8.2.10
yarn add react-navigation
yarn add expo-google-app-auth@^8.3.0
yarn add expo-app-auth

yarn add @babel/preset-typescript

******************************************************************************
Erro de APIkey:

Before:
export const firebaseConfig = { apiKey: "", etc etc };

After:
export default firebaseConfig = { apiKey: "", etc etc };

import {firebaseConfig} from './src/config/FirebaseConfig'; ===== Wrong Order
import FirebaseConfig from './src/config/FirebaseConfig'; ===== Correct Order
*******************************************************************************

### Aula 86


### Aula 87


### Aula 89
