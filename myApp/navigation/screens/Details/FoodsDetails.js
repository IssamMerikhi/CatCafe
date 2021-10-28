import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, FlatList, Button, TouchableHighlight } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('screen');
import LottieView from 'lottie-react-native';
import MediaDetails from './MediaDetails';


const ITEM_HEIGHT = height * .18
const TOP_HEADER_HEIGHT = height * .3

export default function FoodsDetails({ route, navigation }) {

    const data = route.params;

    const styles = StyleSheet.create({

        name : {
            fontSize : 24,
            fontWeight : '700',
            top : ITEM_HEIGHT,
            fontFamily: 'MuseoModerno'

        },
        description : {
            top : ITEM_HEIGHT,
            fontFamily: 'MuseoModerno'

        },
        image : {
            width : ITEM_HEIGHT * .8,
            height : ITEM_HEIGHT * .8,
            resizeMode : 'contain',
            position : 'absolute',
            bottom : 20,
            right:10
        },
        bg : {
            position : 'absolute',
            width : width,
            height: height, 
            backgroundColor :'white',
            transform : [{translateY : TOP_HEADER_HEIGHT}],
            borderRadius : 32,

        },
        PayButton : {
            height: height /10,
            width:width /2,
            borderColor:'black',
            borderWidth: 2,
            borderRadius:5,
            justifyContent:'center',
            marginRight:10,
          },
    
    
    });

    const [loaded] = useFonts({
        MuseoModerno: require('../../../assets/fonts/MuseoModerno-Regular.ttf'),
      });

    if (!loaded) {
        return null;
      }

    return(
        <View style={{ backgroundColor:data.item.color, height: TOP_HEADER_HEIGHT+20 }}>

            <View style = {{flex:1, padding: 20}}>
                        <Animatable.Text animation="zoomInUp"  style = {styles.name}>{data.item.name}</Animatable.Text>
                        <Animatable.Text animation="zoomInUp" style = {styles.description}>{data.item.description}</Animatable.Text>
                        <Image source= {data.item.img} style = {styles.image}/>

                        <View style={styles.bg}>

                            <View style={{
                                borderRadius:32,
                                width: width,
                                height : height / 5,
                                alignItems: 'center',
                                flexDirection : 'row',
                                justifyContent: 'space-between',
                                }}>
                                <LottieView style = {{
                                    width : 100,
                                    height : 100,
                                    justifyContent : 'center',
                                    left : width*.01,
                                    top : width*.01
                                    }}
                                    source={require('../../lottie/cooking.json')}
                                    autoPlay
                                />
                            <View style = {{
                                    justifyContent : 'center',
                                    width : 50,
                                    height: 50,
                                    right : width*.12,
                                    alignItems : 'center',
                                    borderRadius : 30,
                                    borderWidth : 1,
                                    top : height*.01

                                    }}>
                                <Text style = {{
                                    fontFamily : 'MuseoModerno',
                                    fontSize : 18,

                                }}>
                                    {data.item.price}  
                                </Text>
                            </View>
                        </View>
                        <View style = {{
                            width : width,
                            height : .18*height,
                            alignItems : 'center',
                            justifyContent : 'center',
                            }}>
                            <Text style = {{
                                fontFamily : 'MuseoModerno',
                                color : 'black',
                                paddingLeft : 30,
                                paddingRight : 30,
                                paddingBottom : 10,
                            }}>
                                {data.item.details}
                            </Text>
                        </View>
                        <View style = {{
                            height : height*.24,
                            width : width,
                            alignItems : 'center',
                            backgroundColor : 'black',
                            
                            }}>
                            <Text style = {{
                                fontFamily : 'MuseoModerno',
                                color : 'white',
                                padding : 20,
                            top : height * .05

                            }}>
                                All our products are local and of French origin, so as to keep the surrounding businesses running.
                            </Text>
                            <MediaDetails/>

                        </View>


                        </View>

            </View>

        </View>
    );
}


