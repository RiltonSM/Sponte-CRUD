import { PRODUCTS_TYPES } from '../reducers/products';

//Interfaces
import { ProductsInterface } from '../interfaces/products';

export const listProducts = () => {
    return {
        type: PRODUCTS_TYPES.LIST,
    }
}

export const addProduct = (product: ProductsInterface) => {
    return {
        type: PRODUCTS_TYPES.ADD,
        payload: product
    }
}

export const removeProduct = (product: ProductsInterface) => {
    console.log("chegou aqui", product)
    return {
        type: PRODUCTS_TYPES.REMOVE,
        payload: product
    }
}

export const editProduct = (product: ProductsInterface) => {
    return {
        type: PRODUCTS_TYPES.EDIT,
        payload: product
    }
}

export const selectedProduct = (product: ProductsInterface) => {
    return {
        type: PRODUCTS_TYPES.SELECT,
        payload: product
    }
}