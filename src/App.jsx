import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../src/views/HomeView";
import RegisterView from "../src/views/RegisterView";
import LoginView from "../src/views/LoginView";
import MoviesView from "../src/views/MoviesView";
import GenreView from "../src/views/GenreView"
import DetailView from "../src/views/DetailView";
import SettingsView from "../src/views/SettingsView";
import CartView from "../src/views/CartView";
import SearchView from "./views/SearchView";
import './App.css'
import ErrorView from "./views/ErrorView";
import { StoreProvider } from "./context/context";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/settings" element={<SettingsView />} />
          <Route path="/movies" element={<MoviesView />}>
            <Route path="genre/:genre_id" element={<GenreView />} />
            <Route path="details/:id" element={<DetailView />} />
            <Route path="search" element={<SearchView />} />
          </Route>
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App