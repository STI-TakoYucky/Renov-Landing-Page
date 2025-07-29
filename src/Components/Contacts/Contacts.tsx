import { MailOpen, Phone } from 'lucide-react'

export default function Contacts() {
  return (
    
    <main className="overflow-x-hidden">
        <section className='global-margin mt-[8rem] pb-[1.7rem]'>
            <h2 className="heading text-center" data-aos="fade-up">Get In Touch!</h2>
            <div className='flex mt-[3rem] md:flex-row flex-col md:items-start items-center gap-5'>
                <div className='flex flex-col gap-5 md:w-[40%] '>
                    <p className='flex items-center gap-2' data-aos="fade-left"><span className='rounded-full bg-primary-500 p-3 text-white'><Phone /></span>09694205050</p>
                    <p className='flex items-center gap-2' data-aos="fade-left" data-aos-delay={100}><span className='rounded-full bg-primary-500 p-3 text-white'><MailOpen /></span>renov@sample.com</p>
                </div>
                <div className='md:w-[60%] flex gap-2 flex-col'>
                    <div className='flex gap-2'>
                        <input type="text" placeholder='Name' className='w-[50%]' data-aos="fade-left" data-aos-delay={100}/>
                        <input type="text" placeholder='Email' className='w-[50%]' data-aos="fade-left" data-aos-delay={200}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <input type="text" placeholder='Subject' data-aos="fade-left" data-aos-delay={300}/>
                        <textarea placeholder='Message' className='min-h-[10rem]' data-aos="fade-left" data-aos-delay={400}></textarea>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
