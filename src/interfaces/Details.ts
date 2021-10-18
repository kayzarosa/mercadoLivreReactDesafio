export interface Details {
  plain_text: string;
}

interface Pictures {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality?: string;
}

export interface DetailsProduct {
  id: string;
  site_id: string;
  title: string;
  subtitle?: string;
  seller_id: number;
  category_id: string;
  official_store_id?: string;
  price: number;
  priceFormat: number;
  base_price: number;
  original_price?: string;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  thumbnail: string;
  condition: string;
  pictures: Pictures[];
  picturesView: string;
}
