import React from 'react'
import { View } from 'react-native'
import { Categories } from '../../components/index'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../../store/actions/index'
import { styles } from './styles'

const CategoriesScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.categories)
    const categoryProducts = useSelector(state => state.products.filteredProducts)
    const onHandlerSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {
            name: item.title
        })
    }

    return (
        <View style={styles.container}>
            <Categories 
                data={categories}
                onSelected={onHandlerSelectedCategory}
            />
        </View>
    )
}

export default CategoriesScreen