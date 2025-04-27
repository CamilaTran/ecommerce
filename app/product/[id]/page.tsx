import ImageGallery from '@/components/products/image-gallery';
import ProductDetail from '@/components/products/product-detail';
import { ProductsServices } from '@/services/product-services';

interface PageParams {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageParams) {
  const { id } = await params;

  if (!id) return 'Not found';

  const product = await ProductsServices.getProductDetail(id);

  return (
    <div className="py-16 lg:max-w-[76rem] mx-auto lg:px-0 px-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <ImageGallery list={product.images} />
        <ProductDetail info={product} />
      </div>
    </div>
  );
}
