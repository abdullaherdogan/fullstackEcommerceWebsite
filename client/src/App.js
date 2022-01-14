import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import AdminHome from "./pages/Admin/Home";
import AdminOrders from "./pages/Admin/Orders";
import AdminProducts from "./pages/Admin/Products";
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
                    <Route path="profile" element={<Profile />} />
                    <Route path="/admin" element={<Admin />}>
                        <Route index element={<AdminHome />} />
                        <Route path="products" element={<AdminProducts />} />
                        <Route path="orders" element={<AdminOrders />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
