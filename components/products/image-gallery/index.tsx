'use client';

import { useAppStore } from '@/store';
import { Product } from '@/types/product.types';

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  list: Product['images'];
}

const ImageGallery = ({ list }: ImageGalleryProps) => {
  const [selected, setSelected] = useState<string>(list?.[0]?.image_url ?? '');

  const {
    selected: { color = '' },
  } = useAppStore(state => state.product);
  const filterImagesList = list.filter(i => (color ? i.color === color : true));

  return (
    <div className="flex flex-col gap-6">
      {selected && (
        <div className="w-full md:h-200 h-100 relative rounded-lg">
          <Image
            alt="select image view"
            src={selected}
            className="rounded-lg"
            fill
            objectFit="cover"
            sizes=""
          />
        </div>
      )}
      <div
        className={`grid ${filterImagesList.length <= 2 ? 'grid-cols-2' : ''} ${filterImagesList.length === 3 ? 'grid-cols-3' : ''} ${filterImagesList.length > 3 ? '!flex' : ''} gap-4 overflow-x-scroll flex-nowrap hidden-scrollbar`}
      >
        {filterImagesList.map(({ color, image_url }, index) => (
          <div
            className={`${filterImagesList.length > 3 ? 'lg:w-40 md:w-47 w-20' : 'w-full'} md:h-48  h-30 relative rounded-lg flex-shrink-0`}
            key={index}
            onClick={() => {
              setSelected(image_url);
            }}
          >
            <Image
              alt={`product has ${color} color`}
              src={image_url}
              fill
              sizes=""
              objectFit="cover"
              className={`rounded-lg w-full inset-[4px] ${selected === image_url && `border-2 border-indigo-500`} cursor-pointer`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
