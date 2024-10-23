import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons/faGooglePlay';
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons/faAppStoreIos';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ButtonShad } from '../ui/buttonShad';

function About() {
  return (
    <section id="about" className="bg-[#15151D] py-16 px-4 relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto flex flex-col items-start relative z-10">
        <span className="font-bold text-[#2D91FF] text-[20px] md:text-[22px] mt-8 md:mt-3">
          Baixe nosso aplicativo!
        </span>
        <h1 className="text-white font-bold text-[32px] md:text-[48px] lg:text-[60px] leading-[40px] md:leading-[55px] lg:leading-[70px] mt-4">
          Potencialize a eficiência do seu <br /> escritório de advocacia com o <br /> melhor software do mercado!
        </h1>

        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ButtonShad variant="outline" className="rounded-full w-[200px] h-12 bg-[#0072C7] font-bold text-white border-none">
                Download App
              </ButtonShad>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Escolha o seu sistema</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <a href="https://play.google.com/store/apps/details?id=br.com.etrium&hl=pt" target="_blank" className="no-underline">
                <DropdownMenuItem className="hover:bg-[#0072C7] hover:text-white cursor-pointer">
                  Android
                  <DropdownMenuShortcut>
                    <FontAwesomeIcon icon={faGooglePlay} className="text-black hover:text-white" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </a>
              <a href="" target="_blank" className="no-underline">
                <DropdownMenuItem className="hover:bg-[#0072C7] hover:text-white cursor-pointer">
                  iOS
                  <DropdownMenuShortcut>
                    <FontAwesomeIcon icon={faAppStoreIos} className="text-black hover:text-white" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-4">
            <a href="">
              <FontAwesomeIcon icon={faAppStoreIos} className="text-white hover:text-[#2D91FF] text-[32px]" />
            </a>

            <a href="">
              <FontAwesomeIcon icon={faGooglePlay} className="text-white hover:text-[#2D91FF] text-[32px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Imagem da Nuvem */}
      <div className="absolute top-[-50px] right-[-100px] md:right-[-200px] lg:right-[-250px] z-0">
        <img src="./src/assets/image-about.svg" alt="img" className="w-[200px] md:w-[300px] lg:w-[400px]" />
      </div>
    </section>
  );
}

export default About;
