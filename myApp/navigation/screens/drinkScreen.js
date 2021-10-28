import * as React from 'react';
import { SafeAreaViewBase, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';

import DrinksDetails from './Details/DrinksDetails'
import DrinkPay from './Details/Payment/DrinkPay'

const { width, height } = Dimensions.get('screen');

const data_drinks = [
    {
        'img': require('../images/drinks/1.png'),
        'price':'4€', 
        'description' : 'Mango Dragonfruit Beverage.',
        'details' : 'This tropical-inspired pick-me-up—crafted with a refreshing combination of sweet mango and dragonfruit flavors—is hand-shaken with ice and a scoop of real diced dragonfruit. Contains caffeine.',
        'name':'MangOlly',
        'id': '1',
        'color' : "#f0ddd1", 
    },
    {
        'img': require('../images/drinks/2.png'),
        'price':'4€50',
        'description' : 'Strawberry Açaí Lemonade Beverage.',
        'details' : 'Sweet strawberry flavors, passion fruit and açaí notes balanced with the delightful zing of lemonade, caffeine from green coffee extract and served over ice. This is the utimate pick-me-up your afternoon is calling for.',
        'name': 'Strawy',
        'id': '2',
        'color' : "#fb9b6b"
    },
    {
        'img': require('../images/drinks/3.png'),
        'price':'5€50',
        'description' : 'Very Berry Hibiscus Lemon Beverage.',
        'details' : 'Fruit juice and whole blackberries balanced with the delightful zing of lemonade, caffeine from green coffee extract and served over ice. This is the ultimate pick-me-up your afternoon is calling for.',
        'name':'Trinstepinte',
        'id': '3',
        'color' : "#fbcc9e",
    },
    {
        'img': require('../images/drinks/4.png'),
        'price':'4€',
        'description' : 'Teavana Peach Nectarine Green Tea',
        'details' : 'This special unsweetened combination of peach and nectarine flavors plus green tea adds a delicious sparkle of nourishment to your day.',
        'name':'Peachy',
        'id': '4',
        'color' :  "#f8bb9d"
    },
    {
        'img': require('../images/drinks/5.png'),
        'price':'4€', 
        'description' : 'Teavana Mango Black Tea.',
        'details' : 'We start with fine black tea then blend it with refreshing mango notes and hints of crisp lime, giving your day a refreshing lift.',
        'name':'Mangy Chibi',
        'id': '5',
        'color' : "#f0ddd1", 
    },
    {
        'img': require('../images/drinks/6.png'),
        'price':'4€50',
        'description' : 'Vanilla Sweet Cream Cold Brew.',
        'details' : 'Our slow-steeped custom blend of Starbucks® Cold Brew coffee accented with vanilla and topped with a delicate float of house-made vanilla sweet cream that cascades throughout the cup. Its over-the-top and super-smooth.',
        'name': 'Rougeaux',
        'id': '6',
        'color' : "#fb9b6b"
    },
    {
        'img': require('../images/drinks/7.png'),
        'price':'5€50',
        'description' : 'Honey Almondmilk Nitro Cold Brew.',
        'name':'Nitrovic',
        'details' : 'Nitro Cold Brew lightly sweetened with honey and topped off with almondmilk for a balanced taste of energy throughout.',
        'id': '7',
        'color' : "#fbcc9e",
    },
    {
        'img': require('../images/drinks/8.png'),
        'price':'4€',
        'description' : 'Strawberry Frappuccino Blended.',
        'details' : 'Funnel cake–flavored syrup blended with coffee, milk and ice, layered with strawberry puree, whipped cream and powdered-sugar-funnel-cake pieces.',
        'name':'Very Hippie',
        'id': '8',
        'color' :  "#f8bb9d"
    }

];

const ITEM_HEIGHT = height * 0.18


 function drinkScreen({ navigation }) {

    const styles = StyleSheet.create({

        name : {
            fontSize : 18,
            fontWeight : '700',
            fontFamily: 'MuseoModerno'

        },
        description : {
            fontSize : 11,
            opacity : .7,
            fontFamily: 'MuseoModerno'

        },
        image : {
            width : ITEM_HEIGHT * .8,
            height : ITEM_HEIGHT * .8,
            resizeMode : 'contain',
            position : 'absolute',
            bottom : 0,
            right:10
        },
        bg : {
            position : 'absolute',
            width : width,
            height: height, 
            backgroundColor :'red',
            transform : [{translateY : height /2}],
            borderRadius : 32
        }
    
    });

    const [loaded] = useFonts({
        MuseoModerno: require('../../assets/fonts/MuseoModerno-Regular.ttf'),
      });

    if (!loaded) {
        return null;
      }

    return(
        <SafeAreaView style = {{flex:1}}>
            <FlatList
            data={data_drinks}
            keyExtractor={item => item.id}
            contentContainerStyle= {{padding : 20}}
            renderItem={({item}) => {
                return <TouchableOpacity 
                        onPress = {() => 
                            navigation.navigate('DrinksDetails', {item})
                        }
                        
                        style = {{marginBottom: 20, height : ITEM_HEIGHT, backgroundColor:item.color, borderRadius: 10}}>
                    <View style = {{flex:1, padding: 20}}>
                        <Text style = {styles.name}>{item.name}</Text>
                        <Text style = {styles.description}>{item.description}</Text>
                        <TouchableOpacity
                        style = {{paddingTop : 10, width : 150, height : 50,}}
                        onPress = {() => 
                            navigation.navigate('DrinkPay', {item})
                        }>
                            <View style = {{ width : 150, height : 50, backgroundColor : 'white', alignItems : 'center', justifyContent : 'center', borderRadius : 5, }}>
                                <Text style = {{fontFamily : 'MuseoModerno'}}>
                                Drink Me for {item.price} 
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Animatable.Image animation="fadeInUp" duration = {1500} source = {item.img} style = {styles.image}/>

                    </View>
                </TouchableOpacity>
            }}

            />

        </SafeAreaView>
    );
}

const Stack = createNativeStackNavigator();


export default function App() {
    return(

        <Stack.Navigator initialRouteName="Drink2" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Drink2" component={drinkScreen} options={{ headerShown : false }}/>
            <Stack.Screen name="DrinksDetails" component={DrinksDetails} />
            <Stack.Screen name="DrinkPay" component={DrinkPay} />

        </Stack.Navigator>
    );

    
}
