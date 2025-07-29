import { Star } from 'lucide-react';
import React from 'react';

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  rating: number;
};

export default function ProductModal({ item, setItem }: { item: Product | undefined, setItem: React.Dispatch<React.SetStateAction<Product | undefined>> }) {
  if (!item) return null;

  return (
    <article className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setItem(undefined)}>
      <div className="absolute inset-0 bg-black opacity-50 z-40"></div>

      <div className="relative z-50 bg-white w-[90%] max-w-2xl p-6 rounded-lg shadow-lg flex md:flex-row flex-col gap-5">
        <div className='md:w-[50%]'>
            <img src={item.image} alt={item.name} className="w-full rounded-md object-cover max-h-[300px]" />
        </div>
        <div className='flex flex-col gap-2 md:w-[50%]'>
            <h1 className="subsection font-bold mb-4">{item.name}</h1>
            <p>{item.description}</p>
            <p className='bg-primary-900 text-white px-2 py-1 w-fit rounded-md'>{item.price}</p>
            <div className='flex gap-1'>
                {Array.from({ length: 5 }, (_, i) => (
                    <Star
                    key={i}
                    size={16}
                    className={i < item.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}
                    />
                ))}
            </div>
        </div>
      </div>
    </article>
  );
}
