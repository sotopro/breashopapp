import React from 'react'
import { View } from 'react-native'
import { products } from '../../constants/data/index'
import { Products } from '../../components/index'
import { styles } from './styles'

const ProductsScreen = ({ navigation, route }) => {
    const filteredProducts = products.filter(item => item.categoryId === route.params.categoryId)
    const onHandlerSelectedProduct = (item) => {
        navigation.navigate('ProductDetail', { 
            product: item,
            name: item.title
         })
    }
    return (
        <View style={styles.container}>
            <Products
                data={filteredProducts}
                onSelected={onHandlerSelectedProduct}
            />
        </View>
    )
}

export default ProductsScreen