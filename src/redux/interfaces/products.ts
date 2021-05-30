export interface ProductsInterface {
    id?: number,
    name: string,
    description: string,
    quantity: number,
    height: number,
    width: number,
    length: number,
    code: number,
    category: Array<string>,
    amount: number,
    acquisitionDate: string,
    image: string,
}

export interface ProductsPayloadInterface {
    type: string,
    payload?: any
}