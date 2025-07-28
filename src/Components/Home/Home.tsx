import { BadgeCheck, ShieldHalf, Truck } from 'lucide-react';
import ValuePropositionCard from './ValuePropositionCard';
import BestSellers from './BestSellers';
import { valuePropositions, testimonials, products, companyStats } from '../../data/items';


export default function Home() {

  return (
    
    <main className="h-full pb-10">
      {/* Hero Section */}
      <section className='relative text-white'>
        <div className="absolute inset-0 bg-[url('/images/stock-photos/kitchen.jpg')] bg-cover bg-center brightness-[.4] z-0"></div>
        <div className="global-margin h-[70vh] flex items-center justify-center gap-[5rem] flex-col text-center">
          <div className='gap-5 flex flex-col'>
            <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold max-w-[50rem] z-10">Turn Your House into a Dream Home</h1>
            <p data-aos="fade-up" data-aos-delay="100" className='z-10'>Get high-quality appliances designed to simplify your life — only at Renov.</p>
          </div>
          {/* Trust Badges */}
          <div className="flex items-center justify-between gap-[2rem] md:gap-[5rem]">
            <span className='trust-badges_span z-10' data-aos="fade-up" data-aos-delay="200">
              <ShieldHalf size={50}/>
              <p>1-Year Warranty Guaranteed</p>
            </span>
            <span className='trust-badges_span z-10' data-aos="fade-up" data-aos-delay="300">
              <Truck size={50}/>
              <p>Fast & Reliable Delivery</p>
            </span>
            <span className='trust-badges_span z-10' data-aos="fade-up" data-aos-delay="400">
              <BadgeCheck size={50}/>
              <p>Tested for Quality & Durability</p>
            </span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className='flex items-center justify-center flex-col pt-[8rem]'>
        <div className='global-margin text-center'>
          <h2 className='section-title mb-10 !font-bold' data-aos="fade-up">What We Offer</h2>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-5 justify-items-center'>
            { valuePropositions.map((item, index) => {
              return <ValuePropositionCard key={index} index={index} title={item.title} desc={item.description} logo={item.logo}></ValuePropositionCard>
            })}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className='mt-[8rem] py-[6rem] bg-slate-200'>
        <div className='global-margin flex md:flex-row flex-col justify-between'>
          {/* SectionTitle */}
          <div className='md:w-[40%] text-center md:text-left mb-5 md:mr-5'>
            <h2 className='section-title !font-bold mb-5' data-aos="fade-right">Our Impact in the Industry</h2>
            <p data-aos="fade-right" data-aos-delay="100">Years of experience. Thousands of happy customers. One mission: quality.</p>
          </div>

          {/* Section Stats */}
          <div className='md:w-[60%] grid grid-cols-2 gap-10'>
            { companyStats.map((item, index) => {
              return (
                <div key={index} data-aos="zoom-in" data-aos-delay={(index + 1) * 100} className='text-center flex items-center justify-center flex-col gap-4'>
                  <div className='flex flex-col gap-2 items-center justify-center'>
                    <item.icon size={60} className='m-5 text-primary-900'></item.icon>
                    <h3 className='subsection'>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className='pt-[8rem]'>
        <div className="bg-[url('/images/stock-photos/appliances.jpg')] bg-cover bg-center w-full h-[70vh]"></div>
        { products.map((item, index) => {
          return (
            <BestSellers index={index} name={item.name} desc={item.description} price={item.price} image={item.image} key={index}/>
          )
        })}
      </section>

      {/* Testimonials */}
      <section className='pt-[8rem] text-center'>
        <div className='global-margin flex items-center justify-center flex-col'>
            <h2 className='section-title !font-bold mb-10' data-aos="fade-up">What Our Clients Says</h2>
            <div className='flex md:flex-row flex-col justify-between gap-5'>
              { testimonials.map((item, index) => {
                return (
                  <div data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={index} className='bg-primary-500  text-white flex flex-col items-center justify-center rounded-md px-5 py-10 text-center gap-5'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                     <img src={item.image} alt={"person-" + (index + 1)} className='w-[8rem] h-[8rem] rounded-full object-cover'/>
                      <h3 className='font-semibold subsection !text-white mt-2'>{item.name}</h3>
                    </div>
                    <p>{item.feedback}</p>
                  </div>
                )
              })}
            </div>
        </div>
      </section>
    </main>
  )
}
