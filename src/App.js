import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home';
import Navbar from './components/UI/Organisms/Navbar';
import Footer from './components/UI/Organisms/Footer';
import Posts from './components/Pages/Posts';
import Post from './components/Pages/Post';
import Albums from './components/Pages/Albums';
import Album from './components/Pages/Album';

function App() {
  return (
    <BrowserRouter>
      <main class="container py-4">
        <Navbar />
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<Post />} />

          <Route path="/albums" element={<Albums />} />
          <Route path="/album/:id" element={<Album />} />

          <Route
            path="*"
            element={
              <div style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </div>
            }
          />
        </Routes>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
