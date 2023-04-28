
import './App.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:imdbID' element={<MovieDetails />}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </div>
   
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
