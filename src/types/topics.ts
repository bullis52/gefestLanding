import { IBrands } from './brands';

export interface ITopics {
  _id?: string;
  title: string;
  category_id: string;
  category?: {
    children: [];
    description: string;
    image_url: string;
    is_leaf: boolean;
    is_relevant: boolean;
    parent_id: string;
    _id: string;
  };
  brands?: IBrands[];
  properties: {
    description: string;
    display_group: string;
    values: {
      description: string;
    }[];
  }[];
}

export interface CreateTopics {
  _id?: string;
  title: string;
  category_id: string;
  brands?: string[];
  properties: {
    description: string;
    display_group: string;
    values: {
      description: string;
    }[];
  }[];
}
