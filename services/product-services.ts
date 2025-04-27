import { api } from '@/lib/api';
import { Pagination } from '@/types/pagination.type';
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
  filterByCollection: async (
    type: string
  ): Promise<{ data: Product[]; pagination: Pagination }> => {
    try {
      const res = await api.get(`products?collection=${type}`);

      return res.data;
    } catch (error) {
      throw error;
    }
  },
};

export { ProductsServices };
