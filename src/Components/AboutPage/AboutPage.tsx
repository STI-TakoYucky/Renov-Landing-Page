import { team, values } from "../../data/items"

export default function AboutPage() {
  return (
    <main>
        {/* Hero? */}
        <section>
            <div className="h-[40vh] w-full relative flex items-center justify-center"> 
                <img
                src="/images/stock-photos/team.webp"
                alt="Team"
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-[.4]"
                loading="eager"
                fetchPriority="high"
                />
                <h1 className="heading z-10 !text-white" data-aos="fade-up">About Us</h1>
            </div>
        </section>

        {/* What is Renov? */}
        <section className="global-margin mt-[8rem]">
            <h2 className="section-title text-center mb-10" data-aos="fade-up">What is Renov?</h2>
            <div className="flex gap-[2rem] md:flex-row flex-col"> 
                <div className="flex gap-10 flex-col md:w-[40%]">
                    <div className="flex-col flex gap-2">
                        <h3 className="subsection" data-aos="fade-right"  data-aos-delay={100}>The Company</h3>
                        <p className="section-caption !font-normal" data-aos="fade-right"  data-aos-delay={200}>
                            Renov is a trusted brand in the home appliance industry, providing affordable, high-quality products to Filipino households since 2017. Our goal is to help every home become more comfortable, efficient, and stylish with our wide range of appliances.
                        </p>
                    </div>
                    <div className="flex-col flex gap-2">
                        <h3 className="subsection" data-aos="fade-right"  data-aos-delay={300}>Mission</h3>
                        <p className="section-caption !font-normal" data-aos="fade-right"  data-aos-delay={400}>To empower Filipino homes by offering durable, energy-efficient, and affordable home appliances backed by excellent customer service and nationwide support.</p>
                    </div>
                </div>
                <img src="/images/stock-photos/team-working-2.webp" className="w-[60%] bg-gray-200 rounded-md h-[30rem] hidden md:block object-cover" alt="team working"  data-aos="fade-left" data-aos-delay={100}/>
            </div>
        </section>

        {/* Values */}
        <section className="global-margin mt-[8rem]">
            <h2 className="section-title text-center mb-10" data-aos="fade-up">Values</h2>
            <div className="flex gap-[2rem]"> 
                <img src="/images/stock-photos/team-working.webp" className="w-[40%] bg-gray-200 h-[30rem] hidden md:block object-cover rounded-md" alt="team working" data-aos="fade-right" data-aos-delay={100}/>
                <div className="flex gap-5 justify-between flex-col md:w-[60%]">
                    { values.map((item, index) => {
                        return (
                            <div data-aos="fade-right" data-aos-delay={(index + 1) * 100} className="flex-col gap-2 flex" key={index}>
                                <h3 className="subsection">{item.title}</h3>
                                <p className="section-caption !font-normal">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        {/* Meet the team! */}
        <section className="global-margin mt-[8rem]">
            <h2 className="section-title text-center mb-10" data-aos="fade-up" data-aos-delay={100}>Meet the team!</h2>
            <div className="flex flex-wrap items-center justify-center gap-[2rem]"> 
                { team.map((item, index) => (
                    <div data-aos="zoom-in" data-aos-delay={(index + 1) * 100} className=" text-center" key={index}>
                        <img src={item.image} alt={item.name} className="w-[15rem] h-[20rem] mb-5"/>
                        <h3 className="font-bold text-primary-900">{item.name}</h3>
                        <p>{item.position}</p>
                    </div>
                )) }
            </div>
        </section>
    </main>
  )
}
