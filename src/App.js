import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AddSome from "./components/AddSome";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ComponentPage from "./components/ComponentPage";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import Cars from "./components/Cars";
import Other from "./components/Other";
import Furnitures from "./components/Furnitures";
import UserPage from "./components/UserPage"


function App() {
  const [cars, setCars] = useState([]);
  const [furnitures, setFurnitures] = useState([]);
  const [other, setOther] = useState([]);

  const getData = async (option, set) => {
    const { data } = await axios.get(`https://yad2-web-site-server.onrender.com/${option}`);
    set(data);
  };

  useEffect(() => {
    getData("cars", setCars);
    getData("furnitures", setFurnitures);
    getData("other", setOther);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addsome" element={<AddSome />} />
        <Route
          path="/cars"
          element={<Cars/>}
        />
        <Route
          path="/furnitures"
          element={<Furnitures/>}
        />
        <Route
          path="/other"
          element={<Other/>}
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/userPage" element={<UserPage/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
