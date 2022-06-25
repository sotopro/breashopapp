import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/index";
import { styles } from "./styles";
import { colors } from "../../constants/themes/index";

const ProductDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);
  const { title, description, weight, price } = product;

  const onHandlerAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.container}>
      <View style={styles.productDetail}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text>{weight}</Text>
        <Text>${price}</Text>
        <Button
          color={colors.primary}
          title="Add to cart"
          onPress={() => onHandlerAddToCart(product)}
        />
      </View>
    </View>
  );
};

export default ProductDetailScreen;
