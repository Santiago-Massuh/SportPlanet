import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
// import { NavBar } from "./src/Components/Navbar";
// import ProductCard from "./src/Components/ProductCard/ProductCard";
import LandingPage from "./src/views/LandingPage/LandingPage";
import { Home } from "./src/views/Home/Home";
import Detail from "./src/views/Detail/Detail";
import { Profile } from "./src/views/Profile";
import { Admin } from "./src/views/Admin";
import { SupAdmin } from "./src/views/SupAdmin";
import SearchedProducts from "./src/views/SearchedProducts/SearchedProducts";
import SellProduct from "./src/views/Forms/SellProduct/SellProduct";

// Fonts
import "./src/fonts/SportsWorld.ttf";
import "./src/fonts/Seriously.ttf";
import "./src/fonts/aBlackLives.ttf";
import "./src/fonts/RobotoThin.ttf";
import "./src/fonts/RobotoCondensed.ttf";
import "./src/fonts/Bebas.ttf";
import "./src/fonts/MetroPoliceLight.otf";
import "./src/fonts/MetroPoliceRegular.otf";
import Tshirts from "./src/Components/Categories/Tshirts/Tshirts";
import Pants from "./src/Components/Categories/Pants/Pants";
import Shoes from "./src/Components/Categories/Shoes/Shoes";
import Balls from "./src/Components/Categories/Balls/Balls";
import Supplements from "./src/Components/Categories/Suplements/Suplements";
import Accesories from "./src/Components/Categories/Accesories/Accesories";
import FilterNavBar from "./src/Components/FilterNavBar/FilterNavBar";
import Gym from "./src/Components/Categories/Gym/Gym";

const App = () => {
  const location = useLocation();
  return (
    <>
      {/* <NavBar /> */}
      {/* {location.pathname !== "/" && <NavBar />} */}
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/home" Component={Home} />
        <Route path="/detail/:id" Component={Detail} />
        <Route path="/profile" Component={Profile} />
        <Route path="/dashboard" Component={Admin} />
        <Route path="/dashboardSuperAdmin" Component={SupAdmin} />
        <Route path="/category/tShirts" Component={Tshirts} />
        <Route path="products/:product" Component={SearchedProducts} />
        <Route path="/category/pants" Component={Pants} />
        <Route path="/category/gym" Component={Gym} />
        <Route path="/category/shoes" Component={Shoes} />
        <Route path="/category/balls" Component={Balls} />
        <Route path="/category/supplements" Component={Supplements} />
        <Route path="/category/accessories" Component={Accesories} />
        <Route path="/post/product" Component={SellProduct} />
      </Routes>
    </>
  );
};

export default App;
