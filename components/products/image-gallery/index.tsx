'use client';

import { Product } from '@/types/product.types';

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  list: Product['images'];
}

const ImageGallery = ({ list }: ImageGalleryProps) => {
  const [selected, setSelected] = useState<string>(list?.[0]?.image_url ?? "");

  return (
    <div className="flex flex-col gap-6">
      {selected && (
        <Image
          alt="select image view"
          src={selected}
          className="w-full"
          width={592}
          height={800}
        />
      )}
      <div
        className={`grid ${list.length === 2 ? 'grid-cols-2' : ''} ${list.length === 3 ? 'grid-cols-3' : ''} ${list.length > 3 ? '!flex' : ''} gap-4 overflow-x-scroll flex-nowrap scrollbar-hide`}
      >
        {list.map(({ color, image_url }, index) => (
          <div
            className={`${list.length > 3 ? 'w-40' : 'w-full'} h-48 bg-indigo-700 relative rounded-lg flex-shrink-0`}
            key={index}
            onClick={() => {
              setSelected(image_url);
            }}
          >
            <Image
              alt={`product has ${color} color`}
              src={image_url}
              fill
              objectFit="cover"
              className={`rounded-lg inset-[4px] ${selected === image_url && `border-2 border-indigo-500`} cursor-pointer`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
