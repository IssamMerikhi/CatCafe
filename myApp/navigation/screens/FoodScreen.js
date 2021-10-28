import * as React from 'react';
import { SafeAreaViewBase, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';

import FoodsDetails from './Details/FoodsDetails'
import FoodPay from './Details/Payment/FoodPay'

const { width, height } = Dimensions.get('screen');

const data_food = [
    {
        'img': require('../images/food/burger1.png'),
        'price':'4€', 
        'description' : 'Beef steak, cheddar and bacon.',
        'details' : 'Limousin or Charolais beef of French origin, mountain tomme with raw milk, sun-dried tomatoes, flat-leaf parsley and our artisanal sauce.',
        'name':'Big Chib',
        'id': 1,
        'color' : "#f0ddd1", 
    },
    {
        'img': require('../images/food/burger2.png'),
        'price':'4€50',
        'description' : 'Chicken spicy with salad and cream.',
        'details' : 'Homemade ground chicken steak, caramelized onions, grilled bacon, cheddar, salad, tomato and cream with fresh herbs. Accompanied by homemade fries and their sauce or salad and raw vegetables',
        'name': 'Vitos',
        'id': 2,
        'color' : "#fb9b6b"
    },
    {
        'img': require('../images/food/tiktak.png'),
        'price':'5€50',
        'description' : 'Chicken and beef tacos with salad.',
        'details' : 'Authentic Mexican tacos are made of stewed, fried, or grilled meat. The grilled meat is marinated overnight with cumin, oregano, paprika, lime, onions, and chilies.',
        'name':'Tiktak',
        'id': 3,
        'color' : "#fbcc9e",
    },
    {
        'img': require('../images/food/beef.png'),
        'price':'4€',
        'description' : 'Beef served with french fries.',
        'details' : 'Beef Entrecôte composed of a slice of sirloin accompanied by the famous secret sauce, its matchstick potatoes and its salad.',
        'name':'The Hippie',
        'id': 4,
        'color' :  "#f8bb9d"
    },
    {
        'img': require('../images/food/chicken.png'),
        'price':'4€', 
        'description' : 'Chicken tenders in a BBQ sauce.',
        'details' : 'Fried chicken, composed of a slice of sirloin accompanied by the famous secret sauce, its matchstick potatoes and its salad.',
        'name':'Chickin',
        'id': 5,
        'color' : "#f0ddd1", 
    },
    {
        'img': require('../images/food/hotdog.png'),
        'price':'4€50',
        'description' : 'Montrealan Hot Dog with Caleslaw.',
        'details' : 'A grilled or steamed sausage served in the slit of a partially sliced bun. The sausage used is a Wiener Frankfurter.',
        'name': 'Snopp Dog',
        'id': 6,
        'color' : "#fb9b6b"
    },
    {
        'img': require('../images/food/frites.png'),
        'price':'5€50',
        'description' : 'French fries baked in olive oil.',
        'details' : 'French fries are cooked in olive oil and sprinkled with salt, pepper and secret spices. Can be served with melted cheddar and bacon',
        'name':'The Frenchies',
        'id': 7,
        'color' : "#fbcc9e",
    }

];

const ITEM_HEIGHT = height * 0.18


function FoodScreen({ navigation }) {

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
            data={data_food}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle= {{padding : 20}}
            renderItem={({item}) => {
                return <TouchableOpacity 
                        onPress = {() => 
                            navigation.navigate('FoodsDetails', {item})
                        }
                        style = {{marginBottom: 20, height : ITEM_HEIGHT, backgroundColor:item.color, borderRadius: 10}}>
                    <View style = {{flex:1, padding: 20}}>
                        <View style={{backgroundColor:'green'}}/>
                        <Text style = {styles.name}>{item.name}</Text>
                        <Text style = {styles.description}>{item.description}</Text>
                        <TouchableOpacity
                        style = {{paddingTop : 10, width : 150, height : 50,}}
                        onPress = {() => 
                            navigation.navigate('FoodPay', {item})
                        }>
                            <View style = {{ width : 150, height : 50, backgroundColor : 'white', alignItems : 'center', justifyContent : 'center', borderRadius : 5}}>
                                <Text style = {{fontFamily : 'MuseoModerno'}}>
                                Eat Me for {item.price}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Animatable.Image animation="fadeInUp" duration = {1500} source= {item.img} style = {styles.image}/>

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

        <Stack.Navigator initialRouteName="Food2" screenOptions={{
            headerShown: false
          }} >
            <Stack.Screen name="Food2" component={FoodScreen} options={{ headerShown : false }}/>
            <Stack.Screen name="FoodsDetails" component={FoodsDetails} />
            <Stack.Screen name="FoodPay" component={FoodPay} />

        </Stack.Navigator>
    );

    
}