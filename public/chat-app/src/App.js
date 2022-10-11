import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Chat />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
