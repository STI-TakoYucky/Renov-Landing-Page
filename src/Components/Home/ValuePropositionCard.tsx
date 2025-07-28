export default function ValuePropositionCard({ title, desc, logo, index}: {title: string, desc: string, logo:string, index: number}) {
  return (
    <div  data-aos="fade-up" data-aos-delay={(index + 1) * 100} className='shadow-md bg-white rounded-md flex flex-col items-center min-w-[100%] max-w-[18rem] py-[4rem] px-3 md:px-5 gap-5'>
        <img src={logo} alt={title} className="w-[10rem] h-[10rem] max-h-[10rem]"/>
        <h3 className='subsection'>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}
