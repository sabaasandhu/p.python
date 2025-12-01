import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    error: null,
    product: '',
    loading: false,
    cart: 2
}

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true
        },
        setProducts: (state, { payload }) => {
            state.loading = false
            state.products = payload
        },
        setProduct: (state, { payload }) => {
            state.loading = false
            state.product = payload
        },
        setError: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    }
})

export const { setLoading, setProducts, setProduct, setError } = ProductSlice.actions

export default ProductSlice.reducer