import { Routes, Route } from "react-router-dom";
import HomeCandidato from "./Candidato/Home";
// import { Home } from '../pages/Home/index'
// import {EscolhaPerfil} from '../pages/CadidatoEmpresa/index'
// import { LoginC } from "./Candidato/Login";
// import Habilidades from "./Candidato/habilidades";
// import Interesses from "./Candidato/Interesse";


export function RoutesPage(){
    return(
        <Routes>
            <Route path="/" element={<HomeCandidato />}/>
        </Routes>
    )
}

export default RoutesPage;