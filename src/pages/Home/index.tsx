import { Button } from "../../assets/components/button/button"
import Input from "../../assets/components/input/input"
import BannerTop from "./assets/Group 1.svg"
import Pernambucanas from "./assets/imagemPernambucanas.svg"
import Americanas from "./assets/imagemAmericanas.svg"
import Diafer from "./assets/imagemDiafer.svg"
import Box1 from './assets/img1.svg'
import Box2 from './assets/img2.svg'
import Box3 from './assets/img3.svg'
import Box4 from './assets/img4.svg'
import Box5 from './assets/img5.svg'


export function Home(){
    return(
        <main>
                <form className="flex justify-between items-center p-4 max-w-full w-full flex-row" action="" >
                    <div className="w-11/12">
                        <Input type={"buscar"} id={"buscar"} placeholder={"Pesquisar"} className="w-11/12"/>
                    </div>
                <div className="flex gap-2 justify-center items-center mr-6">
                    <a href="#" className="flex justify-center">
                        <Button type={"button"} className={"btn btnPrimaryC max-w-fit"} id={"nav"}>Fale conosco</Button>
                    </a>

                    <a href="#" className="flex justify-center max-w-2">
                        <Button type={"button"} className={"btn btnPrimaryC max-w-fit"} id={"nav"}>Entrar</Button>
                    </a>
                </div>
                    
                
            </form>
        
            <div className="bg-[#351AA0] w-full h-96 flex justify-center items-center">
                <img src={BannerTop} alt="" className="w-[627px] h-[217px] "/>
            </div>
            <div className="text-[#743DFA] flex justify-center items-center gap-2 w-full h-36">
                <h2 className="text-2xl font-serif font-normal">Você pode se interessar</h2>
            </div>
            <ul className="p-4 flex gap-8 overflow-hidden h-72 overflow-y-hidden">
                <li className="snap-center inline-block rounded-md w-80 cursor-pointer"><img src={Box1} className="object-fill bg-no-repeat"/></li>    
                <li className="snap-center inline-block rounded-md w-80 cursor-pointer"><img src={Box2} /></li>    
                <li className="snap-center inline-block rounded-md w-80 cursor-pointer"><img src={Box3} /></li>    
                <li className="snap-center inline-block rounded-md w-80 cursor-pointer"><img src={Box4} /></li>    
                <li className="snap-center inline-block rounded-md w-80 cursor-pointer"><img src={Box5} /></li>    
            </ul>
            <div className="text-[#743DFA] flex justify-center items-center gap-2 w-full h-36">
                <h2 className="text-2xl">Empresas parceiras</h2>
            </div>
            <div className="flex justify-between p-3">
                <img src={Pernambucanas} alt=""/>
                <img src={Americanas} alt=""/>
                <img src={Diafer} alt=""/>
            </div>
        </main>
        

    )
}   

export default Home;