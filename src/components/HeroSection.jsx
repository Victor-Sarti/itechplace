
import iphone from "../assets/iphone.png";
import iphone2 from "../assets/iphone2.png";
import './hero-animations.css';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 ">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
             itechplace
               Assistência Técnica 
                <span className=" bg-gradient-to-r from-blue-500 to-slate-300 text-transparent bg-clip-text">
                    {" "}
                    Especializada em celulares
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            troca de bateria, tela, botões, conectores, câmeras e reparo em placa. Aqui você encontra películas protetoras, capas e diversos acessórios para o seu celular. Além disso, pode adquirir seu iPhone novo ou seminovo em até 12x com o melhor preço e garantia! </p>

            <div className="flex justify-center my-10">
                <a href="https://api.whatsapp.com/send/?phone=5511976247505&text&type=phone_number&app_absent=0wa.me/5511976247505" className="bg-gradient-to-r from-blue-500 to-slade-300 py-3 px-4 mx-3 rounded-md button-scale-on-hover hover:text-slate-950">
                   Fazer Orçamento
                </a>
                <a href="#dep" className="py-3 px-4 mx-3 rounded-md border button-scale-on-hover hover:text-blue-500 hover:border-blue-500">
                    Depoimentos
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <img className="rounded-xl w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4" src={iphone} alt="" />
                <img className="rounded-xl w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4" src={iphone2} alt="" />
            </div>
        </div>
    );
};

export default HeroSection
