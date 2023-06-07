import {NavigationContainer, useRoute} from '@react-navigation/native';
import { createStackNavigator , TransitionSpecs } from '@react-navigation/stack';
import {StatusBar, TouchableOpacity, View, Image} from "react-native";

import menu from './assets/menu.png'

import HomeScreen from "./modules/home/home";
import LoginForm from "./modules/login/login";
import Menu from "./modules/menu/menu";
import Signup from "./modules/signup/signup";
import Rules from "./modules/rules/rules";
import ScoringSystem from "./modules/scoringSystem/scoringSystem";

const Stack = createStackNavigator();

export default function App({ navigation }) {
    const horizontalAnimation = {
        cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
                cardStyle: {
                    transform: [
                        {
                            translateX: current.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [layouts.screen.width, 0],
                            }),
                        },
                        {
                            translateX: next
                                ? next.progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -layouts.screen.width],
                                })
                                : 0,
                        },
                    ],
                },
            };
        },
    };

    return (
        <NavigationContainer style={{
                flex: 1,
                paddingTop: StatusBar.currentHeight
            }}>
            <StatusBar
                animated={true}
                backgroundColor="#354649"
            />
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
            },
            cardStyleInterpolator: horizontalAnimation.cardStyleInterpolator,
        }}>

            <Stack.Screen name="Home" component={HomeScreen}  options={{
                title: 'Home',
                headerStyle: { backgroundColor: '#354649' },
                cardStyle: { backgroundColor: '#354649' },
                headerTintColor: 'white',
            }}/>

            <Stack.Screen name="Menu" component={Menu}  options={{
                title: 'Home',
                headerStyle: { backgroundColor: '#354649' },
                cardStyle: { backgroundColor: '#354649' },
                headerTintColor: 'white',
            }}/>

            <Stack.Screen name="Signup" component={Signup}  options={{
                title: 'Signup',
                headerStyle: { backgroundColor: '#354649' },
                cardStyle: { backgroundColor: '#354649' },
                headerTintColor: 'white',
            }}/>

            <Stack.Screen name="Rules" component={Rules}  options={{
                title: 'Rules',
                headerStyle: { backgroundColor: '#354649' },
                cardStyle: { backgroundColor: '#354649' },
                headerTintColor: 'white',
            }}/>

            <Stack.Screen name="Scoring System" component={ScoringSystem}  options={{
                title: 'Scoring System',
                headerStyle: { backgroundColor: '#354649' },
                cardStyle: { backgroundColor: '#354649' },
                headerTintColor: 'white',
            }}/>

            <Stack.Screen
                name="Login"
                component={LoginForm}
                options={({ navigation }) => ({
                    headerStyle: { backgroundColor: '#354649' },
                    cardStyle: { backgroundColor: '#354649' },
                    headerTintColor: 'white',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Menu') }>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                            }}>
                                <Image source={menu} style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: 'white',
                                    margin: 10,
                                }}></Image>
                            </View>
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>

    </NavigationContainer>
    );
}
