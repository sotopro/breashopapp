import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, ProductDetail }  from '../screens/index'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Categories'>
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Products' component={Products} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default MainNavigator;