import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
    const { pathname } = useLocation();
    const headerRef = useRef<any>(null)
    const [isFixed, setFixed] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (headerRef.current) {
                if (headerRef.current.offsetHeight < window.scrollY) {
                    setFixed(true)
                } else {
                    setFixed(false)
                }
            }
        });
    }, [])

    
    useEffect(() => {
        window.scrollTo(0, 0); // scroll to top
    }, [pathname]);

  return (
    <header ref={headerRef} className={`${isFixed ? "sticky top-0 backdrop-blur-sm z-50 slide-down bg-white/20 text-primary-900": " bg-[#5A8EA3] transition-all ease-in-out duration-300 text-white"} w-full`}>
        <nav className='flex justify-between global-margin items-center py-[1rem]'>
            <div>
                <Link className="font-bold !text-3xl sm:!text-4xl !font-header-font" to={"/home"}>Renov</Link>
            </div>

            <div className="hidden md:block">
                <ul className="flex gap-4 font-medium">
                    <li>
                        <Link to={"/home"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about-us"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/products"}>Products</Link>
                    </li>
                    <li>
                        <Link to={"/contacts"}>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
