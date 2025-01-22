export interface Products {
  productImage: {
    length: number;
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  tags: string[];
  dicountPercentage: number;
  description: string;
  isNew: boolean;
  _id: string;
  title: string;
}
