export interface IProduct {
  id: number;
  img: string;
  title: string;
  price: number;
  discountedPrice?: number;
  moreColors: string[];
}
