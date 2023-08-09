import { BrowserRouter , Routes,  Route, } from "react-router-dom"; 
import Ban from "./pages/Ban";
import Data from "./pages/Data";
import Ewall from "./pages/Ewall";
import Cred from "./pages/Cred";
import Co from "./pages/Co";


const App = () => {
  return (
     // / Element Data itu Halaman Pembayaran
    // /Bank itu Halaman Bank Transfer
    // /E-wallet itu Halaman E-wallet 
    // /credit-card itu Halaman Credit Card
    // isih kui tok bintang kui yo durung dadi durung pas seko contone
    // jk akeh sing pak tak ubah sementara kui ndisi
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/bank" element={<Ban />} />
        <Route path="/E-wallet" element={<Ewall />} />
        <Route path="/credit-card" element={<Cred />} />
        <Route path="/co" element={<Co />} />
        </Routes>
    </BrowserRouter>
    </>

    // / Element Data itu Halaman Pembayaran
    // /Bank itu Halaman Bank Transfer
    // /E-wallet itu Halaman E-wallet 
    // /credit-card itu Halaman Credit Card
    // isih kui tok bintang kui yo durung dadi durung pas seko contone
    // jk akeh sing pak tak ubah sementara kui ndisik
  )
}

export default App
