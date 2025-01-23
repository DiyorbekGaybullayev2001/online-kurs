import {Routes,Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import Home from "./components/Home/Home";
import Tolov from "./components/Tolov/Tolov"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tolov" element={<Tolov />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
