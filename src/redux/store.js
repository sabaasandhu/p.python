import { configureStore, combineReducers } from '@reduxjs/toolkit'

import productSlice from './slices/productSlice'
import cartSlice from './slices/cartSlice'

const reducer = combineReducers({
     prodSlice: productSlice,
     cartSlice: cartSlice
})

const store = configureStore({ reducer })

export default store;