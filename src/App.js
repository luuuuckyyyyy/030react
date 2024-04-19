import { Route, Routes, NavLink} from "react-router-dom";
import React from "react";
import "./App.css";
import { Profile } from "./components/profile";
import { Shop } from "./components/shop";
import { Friends } from "./components/friends";



function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills">
          <NavLink to="/" className="nav-link">
              Главная
            </NavLink>
            <NavLink to="profile" className="nav-link">
              Профиль
            </NavLink>
            <NavLink to="friends" className="nav-link">
              Друзья
            </NavLink>
            <NavLink to="shop" className="nav-link">
              Магазин
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<h2>Вы в личном кабинете. Выбор в меню слева</h2>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;