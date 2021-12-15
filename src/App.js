import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Pages/Home";
import Posts from './components/Pages/Posts';
import Albums from './components/Pages/Albums';
import Album from './components/Pages/Album';
import Navbar from './components/Organisms/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/posts" element={<Posts />} />

          <Route path="/albums" element={<Albums />} />
          <Route path="/album/:id" element={<Album />} />

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

      <br />
    </BrowserRouter>
  );
}

export default App;
