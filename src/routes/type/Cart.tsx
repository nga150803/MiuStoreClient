export interface Product {
    _id: number;
    name: string;
    image:string;
    price: number;
  }
  
  export interface RootState {
    cart: Product[];
  }