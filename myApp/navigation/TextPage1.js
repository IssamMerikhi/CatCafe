import React from 'react';
import { Text, Dimensions, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { TextAnimationSlideDown } from 'react-native-text-effects';
import * as Animatable from 'react-native-animatable';


export default function TextPage1(){

    const {height, width} = Dimensions.get('window');

    const styles = StyleSheet.create({
      container_text:{
        position:'absolute',
        justifyContent : 'center',
        alignItems : 'center',

      },
  
        Title: {
          
          fontSize: 15,
          color:'black',
          fontFamily: 'MuseoModerno'

            
        },
        SubTitle: {
          fontSize: 20,
          color:'black',
          fontFamily: 'MuseoModerno'


      
        }
      });

      const [loaded] = useFonts({
        MuseoModerno: require('../assets/fonts/MuseoModerno-Regular.ttf'),
      });

    if (!loaded) {
        return null;
      }

        return(
        <View style={styles.container_text}>
            <Animatable.Text animation="fadeInDown" duration={3000} style={styles.Title}>
              Welcome to my World
            </Animatable.Text>
            <Animatable.Text animation="bounceIn" duration={3000} style={styles.SubTitle}>
              Journey to the Cat Cafe
            </Animatable.Text>          

        </View>
    );
}

