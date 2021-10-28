import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Draggable from 'react-native-draggable';

import Planet from './images/planet.svg';
import Planet2 from './images/planet-2.svg';
import Planet3 from './images/planet-3.svg';
import Planet4 from './images/planet-4.svg';

export default function SystemSolaire(){


    const styles = StyleSheet.create({
        container_ss:{
            position:'absolute',
            top : 0,
        }
    })
    
    const {height, width} = Dimensions.get('window');


    return (
        <View style={styles.container_ss}>

            <Animatable.View 
                animation="fadeInDown" 
                duration={6000}
                style = {{top : height*0.01, right : width * 0.3}}>
                <Draggable x={0} y={0}>
                <Planet2 width="400px" height="350px" />
                </Draggable>
            </Animatable.View>

            <Animatable.View
                animation="fadeInRight" 
                duration={6000}
                style = {{right : width*0.4, top : height * 0.1}}
            >
                <Draggable x={0} y={0}>
                <Planet3 width="100px" />
                </Draggable>    
            </Animatable.View>

            <Animatable.View 
                animation="fadeInUp" 
                duration={6000}
                style = {{top : height*0.15}}
            >    
                <Draggable x={0} y={0}>
                <Planet4 width="200px" height="120px" />
                </Draggable>    
            </Animatable.View>

            <Animatable.View
                animation="fadeInLeft"
                duration={6000}
                style = {{top : height*0.33, left : width *0.05}}
            >
                <Draggable x={0} y={0}>
                <Planet width="50px" height="50px" />
                </Draggable>
            </Animatable.View>
        
        
        </View>

    );
}