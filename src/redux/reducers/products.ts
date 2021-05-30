//Data
import products from '../../data/products';

//Interfaces
import { ProductsPayloadInterface } from '../interfaces/products'

export const PRODUCTS_TYPES = {
    LIST: "PRODUCTS/LIST",
    ADD: "PRODUCTS/ADD",
    EDIT: "PRODUCTS/EDIT",
    REMOVE: "PRODUCTS/REMOVE",
    SELECT: "PRODUCTS/SELECT"
};

const initialState = {
    list: products,
    selected: {
        id: 0,
        name: "",
        description: "",
        quantity: 0,
        height: 0,
        width: 0,
        length: 0,
        code: 0,
        category: [],
        amount: 0,
        acquisitionDate: "",
        image: "",
    }
};

export default function ProductsReducer (state = initialState, action: ProductsPayloadInterface) {
    console.log("chegou aqui 2")
    switch (action.type) {      
        case PRODUCTS_TYPES.LIST:
            return {
                ...state
            };
        case PRODUCTS_TYPES.ADD: 
            console.log("chegou na adição")
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: Math.floor(Math.random() * (9999 - 4)) + 4,
                        ...action.payload
                    }
                ]
            }
        case PRODUCTS_TYPES.EDIT:
            const productEditedId = action.payload.id;
            const newListEdited = state.list.filter(product => product.id !== productEditedId);

            return {
                ...state,
                list: [
                    ...newListEdited,
                    action.payload
                ]
            };
        case PRODUCTS_TYPES.REMOVE:
            const productRemoveId = action.payload.id;
            console.log("chegou no reducer", productRemoveId)
            const newListRemoved = state.list.filter(product => product.id !== productRemoveId);

            return{
                ...state,
                list: [
                    ...newListRemoved
                ]
            }
        case PRODUCTS_TYPES.SELECT:
            console.log("entrou no select")
            return {
                ...state,
                selected: {
                    ...action.payload
                }
            }
            
        default:
            console.log("entrou no default")
            return state;
    }
}
  