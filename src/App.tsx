import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar"
import { SelectedPage } from "./shared/types"
import Home from "./scenes/Home";
import Servicos from "./scenes/Serviços";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage,setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] =useState<boolean>(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app select-none">
    <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={function (): void {
        throw new Error("Function not implemented.");
      } }></Home>
    <Servicos setSelectedPage={function (): void {
        throw new Error("Function not implemented.");
      } }></Servicos>
    <Footer setSelectedPage={function (): void {
        throw new Error("Function not implemented.");
      } }></Footer>
  </div>
  )
}

export default App
