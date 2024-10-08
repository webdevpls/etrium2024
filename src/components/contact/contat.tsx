function Contact() {
    return (
      <section id='home' className='relative w-full h-[704px] bg-[#15151D] pt-20'>
        
        <div className="max-w-[1350px] flex items-start justify-start mx-auto h-24 px-4 flex-col relative">
          
          <div className="mb-10">
          <span className='font-bold text-[#2D91FF] text-[22px] mt-32 items-start justify-start'>
            Contato
          </span>
          <h1 className='text-white font-bold text-[60px] leading-[70px]'>
            Entre em contato conosco
          </h1>
          </div>

          
  
          <div className="relative w-full h-[400px]">
            {/* Imagem de fundo */}
            <img src="./src/assets/bg-contact.svg" alt="img" className='w-full h-full rounded-[24px]' />
  
            {/* Formulário posicionado sobre a imagem */}
            <form className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-center space-y-4 px-14">
              <input 
                type="email" 
                placeholder="Digite seu email" 
                className="w-[80%] max-w-[500px] p-4 rounded-xl bg-[#1F1F2B] text-white border-none outline-none"
              />
              <input 
                type="text" 
                placeholder="Seu nome" 
                className="w-[80%] max-w-[500px] p-4 rounded-xl bg-[#1F1F2B] text-white border-none outline-none"
              />
              <textarea 
                placeholder="Sua mensagem" 
                className="w-[80%] max-w-[500px] p-4 rounded-xl bg-[#1F1F2B] text-white border-none outline-none resize-none"
                
                
              ></textarea>
              <button 
                type="submit" 
                className="w-[80%] max-w-[500px] p-4 rounded-xl bg-[#2D91FF] text-white font-bold"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
  
      </section>
    )
  }
  
  export default Contact;
  