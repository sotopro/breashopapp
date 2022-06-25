import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, deleteOrder } from "../../store/actions/index";
import OrderItem from "../../components/orders/order-item";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  const onDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder} />
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Orders;
