import Plano1 from "./plano1"
import Plano2 from "./plano2"
import Plano3 from "./plano3"

function Planos() {
  return (
    <section className='bg-[#15151D] h-[1000px] justify-center flex items-center flex-col '>

      <div className="text-white font-bold text-xl text-center">
        <span className="text-[#2D91FF]">Planos</span>
        <h1 className="text-[40px] leading-10">Escolha o melhor plano de acordo  <br/> 
                  com seu bolso!</h1>
      </div>

        <div className="container mx-auto flex flex-row justify-center gap-10 py-11">
        <Plano1/>
        <Plano2/>
        <Plano3/>
        </div>
    </section>
  )
}

export default Planos
