export interface Product {
    _id?: number;
    name: string;
    description: string;
    price: number;
    imageURL: string;
    createdAt?: Date;
}