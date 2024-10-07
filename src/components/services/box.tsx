
import { FaArrowRight } from 'react-icons/fa'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
function Box() {
  return (
    <div className="bg-[#2A2A34] rounded-[40px] px-32 py-24 w-[1500]">
    <h2 className="text-white font-bold text-[55px]">Alguns dos</h2>
    <h2 className="text-white font-bold text-[55px] mb-16">Nossos serviços</h2>
    <div className="grid grid-cols-3 gap-20">
      <div className="flex gap-4 flex-col">
            <img src="./src/assets/icon1.svg" alt="icon1" className='w-14 h-14' />
            <h3 className="text-white  font-bold text-4xl leading-10">Gestão de Processos</h3>
            <p className="text-gray-200 text-[15px]">Controle e organização eficiente de processos judiciais e extrajudiciais.</p>
           
           <Dialog>
            <DialogTrigger asChild>
            <a className='flex flex-row items-center gap-2 text-[#2D91FF]'>
            <span className='text-[#2D91FF] cursor-pointer'>Saiba mais</span>
            <FaArrowRight size={10}/>
            </a>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className='flex gap-3 flex-col'>
                        <div className='flex flex-row items-center gap-2 text-gray cursor-pointer'>
                            <h1>Gestão de Processos</h1>
  
                        </div>
                        <div>
                            <h3 className='text-sm'>Maximize a eficiência e a eficácia operacional com nossa abordagem inovadora em Gestão de Processos. Nossa solução especializada é projetada para otimizar fluxos de trabalho.
                            </h3>
                        </div>
                        


                        </div>
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
            </Dialog>

      </div>
      <div className="flex gap-4 flex-col">
            <img src="./src/assets/icon2.svg" alt="icon1" className='w-14 h-14' />
            <h3 className="text-white  font-bold text-4xl leading-10">Suporte especializado</h3>
            <p className="text-gray-200 text-[15px]">Todo suporte necessário para atender todos nossos clientes e todas as dúvidas.</p>
            <Dialog>
            <DialogTrigger asChild>
            <a className='flex flex-row items-center gap-2 text-[#2D91FF]'>
            <span className='text-[#2D91FF] cursor-pointer'>Saiba mais</span>
            <FaArrowRight size={10}/>
            </a>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className='flex gap-3 flex-col'>
                        <div className='flex flex-row items-center gap-2 text-gray cursor-pointer'>
                            <h1>Gestão de Processos</h1>

                        </div>
                        <div>
                            <h3 className='text-sm'>Maximize a eficiência e a eficácia operacional com nossa abordagem inovadora em Gestão de Processos. Nossa solução especializada é projetada para otimizar fluxos de trabalho.

                            </h3>
                        </div>
                        

                        </div>
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
            </Dialog>

            
      </div>
    <div className="flex gap-4 flex-col">
            <img src="./src/assets/icon3.svg" alt="icon1" className='w-14 h-14' />
            <h3 className="text-white font-bold text-4xl leading-10">Automação Documental</h3>
            <p className="text-gray-200 text-[15px]">Criação, armazenamento e gerenciamento automatizado de documentos legais.</p>
            <Dialog>
            <DialogTrigger asChild>
            <a className='flex flex-row items-center gap-2 text-[#2D91FF]'>
            <span className='text-[#2D91FF] cursor-pointer'>Saiba mais</span>
            <FaArrowRight size={10}/>
            </a>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className='flex gap-3 flex-col'>
                        <div className='flex flex-row items-center gap-2 text-gray cursor-pointer'>
                            <h1>Suporte especializado</h1>
                        </div>
                        <div>
                            <h3 className='text-sm'>Maximize a eficiência e a eficácia operacional com nossa abordagem inovadora em Gestão de Processos. Nossa solução especializada é projetada para otimizar fluxos de trabalho.

                            </h3>
                        </div>
                        


                        </div>
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
            </Dialog>
      </div>
    </div>
  </div>
  )
}

export default Box
