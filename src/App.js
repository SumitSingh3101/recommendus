import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import AboutMe from './pages/aboutMe/aboutMe.js';
import RandomPage from './pages/randomPage/randomPage.js';
import ListPage from './pages/listPage/listPage.js';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/about" element={<AboutMe />}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
            <Route path="/random" element={<RandomPage />}></Route>
            <Route path="/list" element={<ListPage />}></Route>
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
