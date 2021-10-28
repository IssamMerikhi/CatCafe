import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


export default function LottieBackground(){

    const {height, width} = Dimensions.get('window');


    const styles = StyleSheet.create({
        backgg:{
            flexGrow: 1, 

    
        },
        behindlottie:{
            backgroundColor:'blue',
            height:height,
            width:width

        }
    })

    return(
            <View style = {styles.behindlottie}>
                <LottieView
                style={styles.backgg}
                source={require('./lottie/backgroundtest.json')}
                autoPlay
                resizeMode='cover'

                />
            </View>

    )


}


