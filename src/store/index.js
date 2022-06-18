import {createStore, combineReducers } from 'redux';

import ProductReducer from './reducers/products.reducer';
import CategoryReducer from './reducers/category.reducer';

const rootReducer = combineReducers({
    products: ProductReducer,
    category: CategoryReducer
});

export default createStore(rootReducer);