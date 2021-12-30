import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
