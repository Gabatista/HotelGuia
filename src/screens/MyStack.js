import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';
import Details from './Details';


const Stack = createNativeStackNavigator();

const MyStack = () =>{
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='Details' component={Details} options={{headerShown: false}} />
            
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default MyStack;