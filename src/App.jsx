import './Styles/App.css';
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { routes } from "./utils/routes";
import { useDentistStates } from './Context/GlobalContext';

function App() {
  const { state } = useDentistStates();

  return (
    <div className={state.theme === "light" ? "light-theme" : "dark-theme"}>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.detail(":id")} element={<Detail />} />
        <Route path={routes.notFound} element={ <h4>404 - Page Not Found</h4> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
