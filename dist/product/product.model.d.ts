import { Document } from 'mongoose';
export declare type ProductDocument = Product & Document;
export declare class Product {
    id: number;
    title: string;
    image: string;
    likes: number;
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product, {}>, import("mongoose").Model<any, any>, undefined>;
