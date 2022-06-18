import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Products } from '../../components/index'
import { styles } from './styles'

const ProductsScreen = ({ navigation }) => {
    const selectedCategory = useSelector(state => state.category.selected)
    const filteredProducts = useSelector(state => state.products.filteredProducts)
    const productSelected = useSelector(state => state.products.selected)
    const onHandlerSelectedProduct = (item) => {
        navigation.navigate('ProductDetail', { 
            product: item,
            name: item.title
         })
    }

    console.log('selectedCategory', selectedCategory)
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