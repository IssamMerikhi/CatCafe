import * as React from 'react';
import { SafeAreaViewBase, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';


const { width, height } = Dimensions.get('screen');

export default function FoodPay () {
    return(
        <View style = {{ flex : 1, alignItems: 'center', justifyContent : 'center', backgroundColor : 'red'}}>
            <Text style = {{color : 'black'}}>
                FOOD PAYMENT
            </Text>
        </View>
    );
}