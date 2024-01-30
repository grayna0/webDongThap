interface DataType {
    id:string;
    name: string;
    price: number;
    img: string;
    description: string;
    cate:string
  }
  interface ProductType {
    id:string;
    name: string;
    price: number;
    img: string;
    des: string;
    cate:string,
    quantity:number,
    rate:number,

  }
  type FieldType = {
    username?: string;
    email?: string;
    password?: string;
    remember?: string;
  };
  export {DataType, ProductType, FieldType}