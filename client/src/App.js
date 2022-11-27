
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Inicio from "./pages/Inicio"
import CrearModelo from "./pages/CrearModelo"
import Plantas from "./pages/Plantas"
import CrearPlantas from "./pages/CrearPlanta"
import Modelo from "./pages/Modelo"


function App() {
  return (
    <div className="App">

    

      <Router>
        <Link to="/crearModelo"> <div  className='unLink'> Crear un nuevo modelo </div> </Link>
        <Link to="/crearPlantas"> <div  className='unLink'> Crear una nueva planta </div> </Link>
        <Link to="/"> <div  className='unLink'> Ver modelos </div>  </Link>
        <Link to="/plantas"> <div  className='unLink'> Ver plantas </div>  </Link>

        <Routes>
          <Route  path = "/" element = {<Inicio/>}  />
          <Route  path = "/crearModelo" element = {<CrearModelo/>}  />
          <Route  path = "/plantas" element = {<Plantas/>}  />
          <Route  path = "/crearPlantas" element = {<CrearPlantas/>}  />
          <Route  path = "/modelo/:id" element = {<Modelo/>}  />
        </Routes>

        
      </Router> 

    </div>
  );
}

export default App;
