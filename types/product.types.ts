interface Image {
  color: string;
  image_url: string;
}

interface Info {
  title: string;
  description: string[];
}

interface Collection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}

interface Category {
  category_id: string;
  name: string;
  created_at: string;
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Inventory {
  sku: string;
  color: string;
  size: Size;
  list_price: number;
  discount: number | null;
  discount_percentage: number;
  sale_price: number;
  sold: number;
  stock: number;
}

interface Price {
  highest: number;
  lowest: number;
}

export interface Product {
  product_id: string;
  name: string;
  colors: string[];
  description: string;
  images: Image[];
  info: Info[];
  collection: Collection;
  category: Category;
  inventory: Inventory[];
  priceRange: Price;
  rating: number;
  sizes: Size[];
  sold: number;
  reviews: number;
}
