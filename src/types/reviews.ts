export enum ReviewInputType {
  textfield = 'textfield',
  textarea = 'textarea',
}

export interface CreateReviewRequest {
  rating: number;
  title: string;
  text: string;
  user_email: string;
  user_name: string;
  product_id: string;
}

export interface Review {
  _id: string;
  rating: number;
  title: string;
  text: string;
  user_email: string;
  user_name: string;
  status: string;
  product: string;
}

export interface ReviewParams {
  page: number;
  limit?: number;
  status?: string;
  productId?: string | undefined;
  includesProduct?: boolean;
}
