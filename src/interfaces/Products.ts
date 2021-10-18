interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

interface Prices {
  id: string;
  type: string;
  amount: number;
  regular_amount?: string;
  currency_id: string;
  last_updated: Date;
}

interface Seller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: Array<string>;
  price: number;
  priceFormat: string;
  prices: {
    id: string;
    prices: Prices[];
  };
  presentation: {
    display_currency: string;
  };
}

interface SellerAddress {
  city: {
    id?: string;
    name: string;
  }
}

export interface Results {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
  };
  shipping: {
    free_shipping: boolean;
    mode: string;
    tags: Array<string>;
    logistic_type: string;
    store_pick_up: boolean;
  };
  seller_address: SellerAddress;
}

export interface Products {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Results[];
}
