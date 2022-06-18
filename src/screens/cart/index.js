import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from "./styles";
import { cart } from "../../constants/data";
import CartItem from "../../components/cart/cart-item";

const Cart = () => {
    const items = cart;
    const total = 12000;

    const onHandlerDeleteCart = (id) => {
        console.log(id);
    }

    const onHanlderConfirmCart = () => {
        console.log('Confirm');
    }

    const renderItem = ({ item }) => <CartItem item={item} onDelete={onHandlerDeleteCart} />

    return (
        <View style={styles.container}>
            <View style={styles.cartList}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={() => onHanlderConfirmCart()}>
                    <Text style={styles.buttonText}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total</Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart;