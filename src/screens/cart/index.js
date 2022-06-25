import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { confirmCart, removeItem } from "../../store/actions/index";
import CartItem from "../../components/cart/cart-item";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const onHandlerDeleteCart = (id) => {
    dispatch(removeItem(id));
  };

  const onHanlderConfirmCart = () => {
    dispatch(confirmCart(cart, total));
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={onHandlerDeleteCart} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => onHanlderConfirmCart()}
        >
          <Text style={styles.buttonText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total</Text>
            <Text style={styles.total}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
