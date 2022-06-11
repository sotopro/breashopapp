import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, ProductDetail }  from '../screens/index'
import { isIOS } from "../constants/utils/index";
import { colors } from "../constants/themes/index";

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? colors.primary : colors.secondary,
                }
            }}
        >
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Products' component={Products} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default MainNavigator;