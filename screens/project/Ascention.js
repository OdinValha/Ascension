
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pjh1 from '../../components/project/Pjh1';
import Pjh2 from '../../components/project/Pjh2';
import Pjh3 from '../../components/project/Pjh3';
import Pjh4 from '../../components/project/Pjh4'

const Stack = createStackNavigator();

export default function Ascention() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Pjh1">
                <Stack.Screen name="Pjh1" component={Pjh1} options={{ headerShown: false }} />
                <Stack.Screen name="Pjh2" component={Pjh2} options={{ headerShown: false }} />
                <Stack.Screen name="Pjh3" component={Pjh3} options={{ headerShown: false }} />
                <Stack.Screen name="Pjh4" component={Pjh4} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

