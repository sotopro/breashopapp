import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'

const ProductsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Products</Text>
            <Button title='Ir a detalle de productos' onPress={() => navigation.navigate('ProductDetail')} />
        </View>
    )
}

export default ProductsScreen