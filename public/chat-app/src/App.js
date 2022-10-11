import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Register from "./pages/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Chat />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
