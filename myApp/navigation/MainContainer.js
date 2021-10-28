import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, FlatList, Button, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import drinkScreen from '../navigation/screens/drinkScreen'
import FoodScreen from '../navigation/screens/FoodScreen'
import { useFonts } from 'expo-font';
import { TextAnimationFadeIn } from 'react-native-text-effects';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('screen');

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#c2c5cb', '#bc856c', '#fbcc9e', '#cacdd4', "#f0ddd1", "#fb9b6b", "#fbcc9e", "#f8bb9d"];
const DATA = [
  {
    "key": "3571572",
    "title": "Pailetovic ",
    "description": "You never choose a cat, he chooses you. The Queen Pailette is the first one to have met the Prince Chibi.",
    "image": require('./images/cats/paillette.png')
  
},
  {
    "key": "3571747",
    "title": "Evoli ",
    "description": "The best therapist has fur and four legs! Let's find him. This abandoned cat has found refuge with us.",
    "image": require('./images/cats/evoli.png')


  },
  {
    "key": "3571680",
    "title": "Voltali ",
    "description": "Dogs have masters, cats have servants. Try to get acquainted with her.",
    "image": require('./images/cats/voltali.png')
  },
  {
    "key": "3571603",
    "title": "Chibi ",
    "description": "The Prince of Cat Cafe. Chibi is the first cat in the cafe and he started an empire from there. Go catch him !",
    "image": require('./images/cats/chibi.png')
  
  },
  {
    "key": "3571123",
    "title": "Beerus Sama ",
    "description": "A house without a cat is an aquarium without a fish ! Try to find Berrus nearby !",
    "image": require('./images/cats/beerus.png')
  
  },
  {
    "key": "3571343",
    "title": "KitKat ",
    "description": "When the cat and the mouse live in harmony, the provisions suffer. KitKat is always hungry !",
    "image": require('./images/cats/kitkat.png')
  
  },
  {
    "key": "3571887",
    "title": "Mix ",
    "description": "The role of the cat is to sit down and be admired. He has a two-tone coat and beautiful green eyes.",
    "image": require('./images/cats/mix.png')
  
  },
  {
    "key": "3571897",
    "title": "Great Teacher Onizukat ",
    "description": "All cats become the center of attention. GTO always try to be the main character in the room.",
    "image": require('./images/cats/flamantrose.png')
  
  }
]

const Indicator = ({scrollX}) => {
    return <View style = {{ position: 'absolute', bottom:100, flexDirection:'row'}}>
        {DATA.map((_, i) => {
            
            const scale = scrollX.interpolate({
                inputRange: [(i - 1) * width, i * width, (i + 1) * width],
                outputRange: [0.8, 1.4, 0.8],
                extrapolate: 'clamp'
            })

            const opacity = scrollX.interpolate({
                inputRange: [(i - 1) * width, i * width, (i + 1) * width],
                outputRange: [0.4, 0.9, 0.6],
                extrapolate: 'clamp'
            })

            return <Animated.View
                key={`indicator-${i}`}
                style = {{height: 10,
                         width: 10,
                         borderRadius:5,
                         backgroundColor: '#fff',
                         margin: 10,
                         transform: [
                            {
                                scale
                            }
                         ]

                }}
            />
        })}
    </View>
}

const Backdrop = ({scrollX}) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i* width),
        outputRange: bgs.map((bg) => bg)
    })
    return (<Animated.View 
        style = {[StyleSheet.absoluteFillObject,
        {
                        backgroundColor
        }

        ]}
    />
    )
}

const Square = ({scrollX}) => {
    const YOLO = Animated.modulo(Animated.divide(
        Animated.modulo(scrollX, width),
        new Animated.Value(width)),
        1
    );

    const rotate = YOLO.interpolate({
        inputRange : [0,.5,1],
        outputRange: ['35deg','0deg','35deg']
    })

    const translateX = YOLO.interpolate({
        inputRange : [0,.5,1],
        outputRange: [0,-height,0]
    })

    return <Animated.View
        style = {{ width:height, height:height, top: -height*.6, left:-height*.25, backgroundColor :'white', borderRadius: 86, position :'absolute',
        transform : [
            {
                rotate
            },
            {
                translateX
            }
            ]}}
    />
} 

function MainScreen({ navigation }) {

    const scrollX = React.useRef(new Animated.Value(0)).current;

    const [loaded] = useFonts({
        MuseoModerno: require('../assets/fonts/MuseoModerno-Regular.ttf'),
      });

    if (!loaded) {
        return null;
      }


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX}/>
      <Square scrollX = {scrollX} />
      <Animated.FlatList
          data={DATA}
          keyExtractor = {item => item.key}
          horizontal
          scrollEventThrottle={32}
          onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver:false}
          )}
          contentContainerStyle= {{paddingBottom:100}}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem = {({item}) => {
              return (
              <View style={{width, alignItems:'center', padding:20}}>
                <View style = {{ flex:0.7, justifyContent:'center'}}>
                    <Image 
                        source={item.image} 
                        style={{width: width / 2, height : width /2 , resizeMode:'contain'}}

                    />
                    
                </View>
                
                <View style = {{flex:0.3}}>
                <Animatable.Text animation="bounceInLeft" duration = {3000} style={{color : 'white',fontWeight:'500', fontSize:28, marginBottom:10, fontFamily : 'MuseoModerno'}}>
                  {item.title}
                </Animatable.Text>     
                <Animatable.Text animation="bounceInRight" duration = {3000} style={{color : 'white', fontWeight:'300', fontSize: 15, fontFamily : 'MuseoModerno'}}>
                  {item.description}
                </Animatable.Text>

                </View>
              </View>
              );
          }}
      />

    <View style={{ flexDirection: 'row',alignItems : 'center', justifyContent: 'space-between', width : width, height : height *0.15, bottom : height *0.17 }}>

          <Animatable.View animation = "fadeInLeft" duration = { 4000 } style = {{left : height*0.03}}>
            <TouchableOpacity onPress = {() => navigation.navigate('Food')}>
              <View style = {{width : 150, height : 50,  justifyContent : 'center', alignItems : 'center' , borderRadius : 5, borderColor : 'white', borderWidth : 1}}>
              <Text style = {{ fontFamily : 'MuseoModerno', color : 'white'}}>
                Food
              </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation = "fadeInRight" duration = { 4000 } style = {{right : height*0.03}}>
            <TouchableOpacity onPress = {() => navigation.navigate('Drink')}>
              <View style = {{width : 150, height : 50,  justifyContent : 'center', alignItems : 'center', borderRadius : 5, borderColor : 'white', borderWidth : 1}}>
              <Text style = {{ fontFamily : 'MuseoModerno', color : 'white'}}>
                Drinks
              </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
    
    </View>
    
      <Indicator scrollX={scrollX} />
    </View>
  );

}


const Stack = createNativeStackNavigator();


export default function App() {
    return(

        <Stack.Navigator initialRouteName="Main" >
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown : false }}/>
            <Stack.Screen name="Food" component={FoodScreen} />
            <Stack.Screen name="Drink" component={drinkScreen} />

        </Stack.Navigator>
    );

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FoodButton: {
    height: 80*0.66,
    width:160*0.66,
    borderColor:'white',
    borderWidth: 2,
    color:'white',
    borderRadius:5,
    justifyContent:'center',
    bottom:150,
    marginRight:10

  },
  DrinkButton: {
    height: 80*0.66,
    width:160*0.66,
    borderColor:'white',
    borderWidth: 2,
    color:'white',
    borderRadius:5,
    justifyContent:'center',
    bottom:150,
    marginLeft: 10

  }
});