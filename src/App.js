import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Pages/Home";
import Header from './components/Templates/Header';
import Pokedex from './components/Pages/Pokedex';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
