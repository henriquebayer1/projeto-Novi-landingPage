import { Route, Routes } from "react-router-dom";
import Home from "./source/Home"
import { Login } from "./source/Login";
import Registro from "./source/registro";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Registro' element={<Registro/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
