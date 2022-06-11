import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const ProductDetailScreen = ({ navigation, route }) => {
    const product = route.params.product;
    const { id,
        title,
        description,
        weight,
        price
    } = product;

    console.warn({product})
    return (
        <View style={styles.container}>
            <View style={styles.productDetail}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text>{weight}</Text>
                <Text>${price}</Text>
            </View>
        </View>
    )
}

export default ProductDetailScreen