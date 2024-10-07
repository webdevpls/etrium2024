
import  { useState } from 'react'

function Navbar() {
  
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre nós", href: "#about" },
    { label: "Serviços", href: "#" },
    { label: "Planos", href: "#" },
    { label: "Contato", href: "#" }
  ];


  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    
    <nav className="fixed top-0 z-50 py-6 bg-[#15151c] w-full">
    <div className="container px-4 mx-auto relative lg:text-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <a href=""><img src="././src/assets/logoetrium.png" alt="logo" className='w-[130px]'/></a>
        </div>
        <ul className="hidden lg:flex ml-14 font-mono space-x-12 text-[17px]">
          {navItems.map((item, index) => (
            <li key={index} className='text-white hover:text-[#0072C7]'>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="relative hidden lg:flex justify-center space-x-12 items-center">
          <div className='absolute  bg-[#104771] -inset-0.5 blur-sm rounded-full ml-12'>
          </div>
          <a
            href="https://app-staging.etrium.com.br/#/"
            className="relative bg-[#0072C7] py-2 px-9 z-10 rounded-full text-white font-bold hover:bg-[#008fc7]"
            target='_blank'
          >
            Sistema
          </a>
        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
          
          </button>
        </div>
      </div>
      </div>
  </nav>

  )
}

export default Navbar;
