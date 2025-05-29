export type StoreFormData = {
  name: string;
  domain: string;
  country: string;
  category: string;
  currency: string;
  email: string;
}

export type ProductsData = {
  _id: string;
  name: string;
  description: string;
  category: { _id: string, name: string };
  images: {public_id: string, secure_url: string, optimizeUrl: string}[];
  video: { public_id: string, secure_url: string}
  status: boolean;
  price: number | string;
  createdAt: Date;
  updatedAt: Date;
}