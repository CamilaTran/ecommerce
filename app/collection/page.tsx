import ProductCard from '@/components/collections/product-card';
import { ProductsServices } from '@/services/product-services';
import { Product } from '@/types/product.types';

export default async function Page() {
  const data = await ProductsServices.filterByCollection('latest');

  return (
    <div className="lg:max-w-[1216px] sm:max-w-[704px] !mx-auto lg:!py-24 sm:!py-16 !py-12 !px-4">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-3xl">Latest Arrivals</h3>
          <button className="border border-[0.5px] border-neutral-200 rounded-sm py-[10px] px-[18px] shadow font-medium">
            View all
          </button>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 justify-center">
          {data.data.length &&
            data.data.map((item: Product) => (
              <ProductCard info={item} key={item.product_id} />
            ))}
        </div>
      </div>
    </div>
  );
}
