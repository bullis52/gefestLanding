import { IProductGet } from '@/types/product';

export interface IFavorite {
  _id: string;
  product: {
    _id: string;
    description: string;
    name: string;
    images: {
      purpose: 'string';
      url: 'string';
    }[];
    price: {
      max: {
        amount: number;
        currency: number;
      };
      min: {
        amount: number;
        currency: number;
      };
    };
  };
}

export interface IFavoriteGet {
  product: IProductGet;
  _id: string;
}
