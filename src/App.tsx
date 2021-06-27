import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
import { Funciones } from "./typescript/Funciones";
import { ObjectosTilerales } from "./typescript/ObjectosTilerales";
import { TipoBasicos } from "./typescript/TipoBasicos";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS</h1>
      <hr/>
      {/* <TipoBasicos/> */}
      {/* <ObjectosTilerales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      {/* <ContadorConHook/> */}
      <Login/>
    </div>
  )
}

export default App;