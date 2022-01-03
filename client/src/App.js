import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
function App() {
    return (
        <>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="products" index element={<Products />} />
                    <Route
                        path="products/:productId"
                        element={<ProductDetail />}
                    />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
