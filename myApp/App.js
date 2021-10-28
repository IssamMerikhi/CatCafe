import React from 'react';
import { Button, View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

import MainContainer from './navigation/MainContainer';
import Socials from './navigation/Socials';
import TextPage1 from './navigation/TextPage1';
import SystemSolaire from './navigation/SystemSolaire';
import Meeting from './navigation/Meeting';
import LottieBackground from './navigation/LottieBackground';

function HomeScreen({ navigation }) {

  const [loaded] = useFonts({
    MuseoModerno: require('./assets/fonts/MuseoModerno-Regular.ttf'),
  });

if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>


      <LottieBackground/>
      <Socials/>
      <SystemSolaire/>
      <TextPage1/>

      <View style = {styles.Bout}>
      <TouchableOpacity onPress = {() => navigation.navigate('Menu')}>
              <View style = {{width : 160, height : 80,  justifyContent : 'center', alignItems : 'center', borderRadius : 5}}>
              <Text style = {{ fontFamily : 'MuseoModerno', color : 'black'}}>
                Get Started
              </Text>
              </View>
            </TouchableOpacity>
      </View>




    </View>
    
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
          }}>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
  
  container: {
    justifyContent: 'center',
    flex:1,
    backgroundColor: 'yellow',
    width:'100%',
    height: "100%",
    alignItems : 'center',
  },
  Bout: {
    height: 80,
    width:160,
    position:'absolute',
    borderColor:'black',
    borderWidth: 2,
    borderRadius:5,
    justifyContent:'center',
    bottom : "33%"
  }

});