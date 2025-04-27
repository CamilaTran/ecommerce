import { Product } from '@/types/product.types';
import Info from '../info';
import Tag from '@/components/shared/tag';
import Rating from '@/components/shared/rating';

import Colors from '@/components/shared/colors';
import Size from '@/components/shared/sizes';
import AddToCartButton from '../add-to-cart-button';
import Quantity from '../quantity';

interface ProductDetailProps {
  info: Product;
}

const ProductDetail = ({ info }: ProductDetailProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <h3 className="font-semibold md:text-5xl text-3xl">{info.name}</h3>
        <div>
          <div>
            <span className="text-neutral-600 text-3xl font-medium">
              ${info.priceRange.lowest}
            </span>
            {info.priceRange.highest > info.priceRange.lowest && (
              <span className="text-neutral-400 line-through text-lg font-medium ml-2">
                ${info.priceRange.highest}
              </span>
            )}
          </div>
          <div className="mt-2 mb-3">
            <Tag content="20% OFF" />
          </div>

          <Rating reviews={info.reviews} rating={info.rating} />
        </div>
      </div>

      <p className="text-neutral-600 text-base">{info.description}</p>

      <Colors colorList={info.colors} />

      {!!info.sizes.length && <Size sizes={info.sizes} />}

      <Quantity />

      <AddToCartButton
        info={info}
        isTriggerColor={Boolean(info.colors.length)}
        isTriggerSize={Boolean(info.sizes.length)}
      />

      <Info info={info.info} />
    </div>
  );
};

export default ProductDetail;
