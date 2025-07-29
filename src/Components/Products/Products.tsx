import { useState } from 'react'
import { productsList } from '../../data/items'
import { Star } from 'lucide-react'
import ProductModal from './ProductModal'

export default function Products() {
    
    const [item, setItem] = useState<{id: number, name: string, price: string, description: string, image:string, rating: number} | undefined>()

  return (
    <>
    <ProductModal item={item} setItem={setItem}></ProductModal>
    <main className='min-h-screen'>
        <section className='global-margin mt-[8rem]'>
            <div className='grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid gap-2 md:gap-5'>
             {
                productsList.map((item) => {
                    return (
                    <article onClick={() => setItem(item)} key={item.id} className='bg-white shadow-md w-[100%] h-[20rem] rounded-md hover:translate-y-1 cursor-pointer hover:opacity-90 transition-all duration-200'>
                        <div className="w-full h-[60%] overflow-hidden">
                            <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <div className='px-5 py-4 flex flex-col gap-2'>
                            <h2 className='section-caption !font-semibold text-primary-900 truncate'>{item.name}</h2>
                            <p className='bg-primary-900 text-white small-text w-fit !font-body-font px-2 py-1 rounded-md'>{item.price}</p>
                        </div>
                        <div className="flex items-center px-5 gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star
                            key={i}
                            size={16}
                            className={i < item.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}
                            />
                        ))}
                        </div>
                    </article>
                    )
                })
             }
            </div>
        </section>
    </main>
    </>
  )
}
