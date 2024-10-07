function Footer() {
    return (
      <section className="bg-[#15151D] py-12">
        <div className="container mx-auto flex justify-between items-start">
          {/* Left side */}
          <div>
            <h2 className="text-white text-xl font-bold">ETRIUM</h2>
            <p className="text-gray-400 mt-2">Otimize sua rotina jurídica com nosso software especializado!</p>
          </div>
          
          {/* Middle Navigation */}
          <div className="text-white">
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Sobre nós</a></li>
              <li><a href="#" className="hover:text-gray-400">Serviços</a></li>
              <li><a href="#" className="hover:text-gray-400">Planos</a></li>
              <li><a href="#" className="hover:text-gray-400">Contato</a></li>
            </ul>
          </div>
          
          {/* Right side - Support */}
          <div className="text-white">
            <h3 className="font-bold text-lg">Tire sua dúvida com nosso Suporte</h3>
            <div className="mt-4 flex items-center">
              <input 
                type="text" 
                placeholder="Suporte" 
                className="bg-[#2B2B36] text-gray-300 px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-[#3B82F6] hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25l3 3-3 3M3.75 12h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Footer;
  