import { api } from '@/lib/api';
import { Product } from '@/types/product.types';

const ProductsServices = {
  getProductDetail: async (prodId: string): Promise<Product> => {
    try {
      const res = await api.get(`products/${prodId}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};

export { ProductsServices };
