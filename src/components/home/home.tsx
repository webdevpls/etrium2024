
function Home() {
  return (
    <section id='home' className=' relative w-full h-[704px] bg-img_bg bg-no-repeat bg-center bg-cover 2xl:h-[1300px] pt-20 '>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white font-bold text-[80px] text-center mt-[80px] tracking-normal leading-[80px]'>Otimize sua rotina jurídica  com <br /> nosso software especializado!</h1>
            <p className='text-white mt-4 text-[18px]'>Traga inovação para sua prática jurídica e supere a concorrência com a ajuda de nossa tecnologia de ponta.</p>
        </div>
        <div className='flex items-center justify-center mt-[155px]'>
        <img src="./src/assets/img-home.svg" alt="imghome" className='w-[1400px]'/>
        
        </div>
        <div className='absolute bottom-0 flex items-center justify-center'>
            <img src="./src/assets/Shadow.svg" alt="" className='w-[2200px]'/>
        </div>
        
    </section>
  )
}

export default Home
