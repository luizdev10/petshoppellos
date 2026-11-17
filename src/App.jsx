import NavBar from "./pages/navbar";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
//import Shop from "./pages/shop";
import BanhoTosa from "./pages/banhoetosa";
import Atendimento from "./pages/atendimento";
import Footer from "./pages/footer";
import Privacidade from "./pages/privacidade";
import Demonstracao from "./pages/demonstracao";

function App() {

  return (
    <>
      <NavBar />
      <Inicio />
      <Sobre />
      {/* <Shop /> */}
    <BanhoTosa />
      <Atendimento />
      <Privacidade />
      <Footer />
      <Demonstracao />
    </>
  )
}

export default App
