import { BrowserRouter , Routes,  Route, } from "react-router-dom"; 
import Ban from "./pages/Ban";
import Data from "./pages/Data";
import Co from "./pages/Co";
import Ewall from "./pages/Ewall";


const App = () => {
  return (
    <>
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/bank" element={<Ban />} />
        <Route path="/Co" element={<Co />} />
        <Route path="/ewall" element={<Ewall />} />
        
        </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
