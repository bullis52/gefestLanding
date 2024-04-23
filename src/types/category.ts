export interface ICategoryThree {
  children?: ICategoryThreeChildren[];
  description: string;
  image_url: string;
  is_leaf: boolean;
  is_relevant: boolean;
  parent_id?: number;
  __v?: number;
  _id?: string;
}

export interface ICategoryThreeChildren {
  children?: ICategoryThreeChildren[];
  description: string;
  image_url: string;
  is_leaf: boolean;
  is_relevant: boolean;
  parent_id?: number;
  __v?: number;
  _id?: string;
}

export interface ICategoryError {
  image_url: string;
  description: string;
  is_leaf: string;
  is_relevant: string;
}
