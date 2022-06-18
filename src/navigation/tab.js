import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import MainNavigator from "./main";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { colors } from "../constants/themes";

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
    <Text style={{
        color: focused ? colors.primary : colors.secondary,
        fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
    }}>{label}</Text>
)

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator 
            initialRouteName="ShopTab"
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
        >
            <BottomTabs.Screen 
                name='ShopTab'
                component={MainNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Shop'),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={ focused ? 'home' : 'home-outline'} size={20} color={focused ? colors.secondary : colors.primary} />
                    )
                }}
            />
            <BottomTabs.Screen 
                name='CartTab' 
                component={CartNavigator} 
                options={{
                    tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Cart'),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={ focused ? 'cart' : 'cart-outline'} size={20} color={focused ? colors.secondary : colors.primary} />
                    ),
                }}    
            />
             <BottomTabs.Screen 
                name='OrdersTab' 
                component={OrdersNavigator} 
                options={{
                    tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Orders'),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={ focused ? 'file-tray-full' : 'file-tray-full-outline'} size={20} color={focused ? colors.secondary : colors.primary} />
                    ),
                }}    
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator;