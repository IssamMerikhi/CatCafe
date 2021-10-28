import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';


export default function Meeting(){

    const {height, width} = Dimensions.get('window');

    const styles = StyleSheet.create({
       
        container_meeting:{
            position:'absolute',            
            height:height/10,
            width:width,
            bottom : 0,
            left : 0,
        },
        cat : {
            left : "-16%"
        }
    })
    console.log(width)
    
    return(
        <View style={styles.container_meeting}>
            <LottieView
            style={styles.cat}
            source={require('./lottie/cats.json')}
            autoPlay
            />
        </View>

    )


}

