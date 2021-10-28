import React from 'react';
import { Linking, View, StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function MediaDetails(){

    const [loaded] = useFonts({
        MuseoModerno: require('../../../assets/fonts/MuseoModerno-Regular.ttf'),
      });

    if (!loaded) {
        return null;
      }

    const {height, width} = Dimensions.get('window');


    const styles = StyleSheet.create({
        container_socials:{
            position:'absolute',
            bottom: height*0.06,
            flexDirection : 'row',
            width : width /2,
            display : 'flex',
            justifyContent : 'space-between'

        },
        media : {
            fontFamily: 'MuseoModerno',
            color:'white',
            fontSize:16,
            marginRight : 10,
            bottom : 5
        },
        fb:{
            width:16,
            height:16,
            backgroundColor:'#3b5998',
            borderRadius:30,
            marginRight : 10,
            borderWidth : 1,
            borderColor : 'white'



        },
        twitter:{
            width:16,
            height:16,
            backgroundColor:'#1DA1F2',
            borderRadius:30,
            marginRight : 10,
            borderWidth : 1,
            borderColor : 'white'



        },
        insta:{
            width:16,
            height:16,
            backgroundColor:'#fb3958',
            borderRadius:30,
            marginRight : 10,
            borderWidth : 1,
            borderColor : 'white'

        }
    });

    return(
        <View style = {styles.container_socials}>


            <TouchableOpacity onPress={() => Linking.openURL('http://facebook.com')}>
            <Animatable.View animation="fadeInRight" duration = {4000} style={styles.fb}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('http://twitter.com')}>
                <Animatable.View animation="fadeInRight" duration = {5000} style={styles.twitter}/> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('http://instagram.com')}>
            <Animatable.View animation="fadeInRight" duration = {6000} style={styles.insta}/>  
            </TouchableOpacity>

        </View>
    );
}