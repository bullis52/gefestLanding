export interface IProductGet {
  additional_description: string;
  additional_product_description: string;
  _id: string;
  brand: string;
  category: string;
  description: string;
  external_products_ids: {
    asin: string[];
    gtin: string[];
    mpn: string[];
    pzn: string[];
    billiger: string;
  };
  is_old_product: boolean;
  images: {
    purpose: string;
    url: string;
  }[];
  hrefs: any;
  name: string;
  payment_methods: string[];
  shipping_methods: string[];
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
  is_relevant: boolean;
  short_name: string;
  meta_description: string;
  meta_name: string;
  properties: [
    {
      description: string;
      v: string;
      display_group: string;
      values: [
        {
          description: string;
        },
      ];
    },
  ];
  short_properties: string[];
}

export interface IProductPost {
  brand_id: string;
  category_id: string;
  description: string;
  external_products_ids: {
    asin: string[];
    gtin: string[];
    mpn: string[];
    pzn: string[];
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
    values: {
      description: string;
    }[];
  }[];
}

export interface IProductErrors {
  id: string;
  brandId: string;
  categoryId: string;
  description: string;
  min: string;
  max: string;
  asin: string;
  name: string;
  shortName: string;
  image_url: string;
  image_url2: string;
  image_url3: string;
  image_url4: string;
  image_url5: string;
  image_url6: string;
}

export interface IMethods {
  description: string;
  __v: number;
  _id: string;
}

export interface IProductExternal {
  id: number;
  brand: {
    name: string;
    logo_url: string;
  };
  category: {
    description: string;
    image_url: string;
    is_leaf: boolean;
  };
  description: string;
  external_product_ids: {
    asin: string[];
    gtin: string[];
    mpn: string[];
    pzn: string[];
  };
  images: {
    purpose: string;
    url: string;
  }[];
  name: string;
  payment_methods: {
    description: string;
  }[];
  price: {
    max: {
      amount: number;
      currency: number;
    };
    min: {
      amount: number;
      currency: string;
    };
  };
  properties: {
    description: string;
    display_group: string;
    values: {
      description: string;
    }[];
  }[];
  shipping_methods: {
    description: string;
  }[];
  short_name: string;
}
