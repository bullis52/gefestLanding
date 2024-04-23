export interface CategoryTree {
  _id: string;
  children: CategoryTreeChildren[];
  description: string;
  icon_url: string;
  image_url: string;
  is_leaf: boolean;
  is_relevant: boolean;
  parent_id: string;
  additional_description?: string;
  static_text_description?: string | TrustedHTML;
}

export interface CategoryTreeChildren {
  _id: string;
  children: CategoryTreeChildren[];
  description: string;
  image_url: string;
  icon_url: string;
  is_leaf: boolean;
  is_relevant: boolean;
  parent_id: string;
  additional_description?: string;
}

export interface Category {
  _id: string;
  description: string;
  image_url: string;
  icon_url: string;
  is_leaf: boolean;
  is_relevant: boolean;
  parent_id: string;
  additional_description?: string;
}

export interface IProduct {
  brand_id: string;
  category_id: string;
  description: string;
  external_products_ids: {
    asin: [string];
  };
  images: {
    purpose: string;
    url: string;
  }[];
  name: string;
  payment_methods_ids: string[];
  shipping_methods_ids: string[];
  price: {
    max: {
      amount: number;
      currency: string;
    };
    min: {
      amount: number;
      currency: string;
    };
  };
  is_relevant: true;
  short_name: string;
  properties: {
    description: string;
    display_group: string;
    values: [
      {
        description: string;
      },
    ];
  }[];
}
