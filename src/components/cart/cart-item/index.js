import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../../constants/themes";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.detail}>
          <Text style={styles.detailQty}>qty:{item.quantity}</Text>
          <Text style={styles.detailPrice}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={20} color={colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
