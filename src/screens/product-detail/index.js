import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './styles'

const ProductDetailScreen = ({ navigation }) => {
    const product = useSelector(state => state.products.selected)
    const { 
        title,
        description,
        weight,
        price
    } = product;

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