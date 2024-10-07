import Button from '../button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons/faAppStoreIos';



function About() {
  return (
    <section id='about' className='bg-[#15151D] h-[600px] '>

        <div className="max-w-[1350px] flex items-start justify-start mx-auto h-24 px-4 flex-col">
            <span className='font-bold text-[#2D91FF] text-[22px] mt-32  items-start justify-start'>
                Por quê a Etrium?
            </span>
            <h1 className='text-white font-bold text-[60px] leading-[70px]'>
            Potencialize a eficiência do seu <br/> escritório de advocacia com o <br/> melhor software do mercado!
            </h1>

            <div className='mt-8 flex flex-row gap-4  items-center justify-center'>
            <Button
            href='#'
            title='Download app'
            />

            <div className='ml-5 flex gap-7'>
            <a href="">
             <FontAwesomeIcon icon={faAppStoreIos} className='text-white hover:text-[#2D91FF] size-8'/>
            </a>

            <a href="">
            <FontAwesomeIcon icon={faGooglePlay} className='text-white hover:text-[#2D91FF] size-8 '/>
            </a>
            </div>

            </div>
        </div>

        <div className='absolute left-[1800px]'>
            <img src="./src/assets/image-about.svg" alt="img" />
        </div>
     
    
    </section>
  )
}

export default About
