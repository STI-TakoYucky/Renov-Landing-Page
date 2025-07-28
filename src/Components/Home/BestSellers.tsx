export default function BestSellers({name, desc, image, index}: {name: string, desc: string, price: string, image: string, index: number}) {
  return (
    <div className='global-margin flex flex-col pt-[8rem]'>
        <div className={`flex w-full justify-around items-center relative ${index === 1 ? "md:flex-row-reverse": "md:flex-row"} flex-col`}>
            <div className='relative flex justify-center items-center'>
                <div className='bg-primary-500 w-[80%] aspect-square left-[-3rem] top-[7rem] rounded-full absolute -z-10' data-aos="zoom-in"  data-aos-delay={200} ></div>
                <img className='w-[100%] max-w-[26rem] h-auto' src={image} alt="" data-aos="zoom-in"/>
            </div>
            <div className='flex flex-col gap-3 ml-5 mt-10 md:mt-0 md:text-left text-center md:items-start items-center'>
                <h3 className='heading' data-aos="fade-left">{name}</h3>
                <p className='max-w-[40rem]' data-aos="fade-left" data-aos-delay={100}>{desc}</p>
            </div>
        </div>
    </div>
  )
}
