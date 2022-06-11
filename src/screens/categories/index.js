import React from 'react'
import { View } from 'react-native'
import { Categories } from '../../components/index'
import { categories } from '../../constants/data/categories'
import { styles } from './styles'

const CategoriesScreen = ({ navigation, route }) => {

    const onHandlerSelectedCategory = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
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