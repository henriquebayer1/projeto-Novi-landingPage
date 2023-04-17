import { Route, Routes } from "react-router-dom";
import Home from "./source/Home"
import { Login } from "./source/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
