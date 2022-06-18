import { products } from '../../constants/data/index'

const initialState = {
    products,
    filteredProducts: [],
    selected: null
} 

const ProductReducer= (state = initialState, action) => {
    return state
}

export default ProductReducer