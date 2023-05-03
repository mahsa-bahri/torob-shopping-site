import HomePage from "./HomePage";
import Home from "./Home";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import Signup  from "./components/Form";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<UserProfile/>}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/home/:category" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
