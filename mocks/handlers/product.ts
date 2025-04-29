import { http } from 'msw';
import { productByCollection, productDetailsResolver } from '../resolvers/products';

export const productHandlers = [
  http.get('/api/products/:id', productDetailsResolver),
  http.get('/api/products?collection=:collection', productByCollection),
];
