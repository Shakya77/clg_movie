import { lazy, Suspense, useContext, useEffect, useState } from 'react'
import './App.css'
import Footer from './Footer/Footer'
import NavBar from './Navbar/NavBar'
import ToggleTheme from './ToggleTheme/ToggleTheme'
import Card from './card/Card'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import ThemeToggler from './ThemeToggler/ThemeToggler'
import { ThemeContext, ThemeProvider } from './Context/ThemeContext'

const moviesData = [
  {
    id: 1,
    title: "Magadhira",
    genre: "Drama"
  },
  {
    id: 2,
    title: "Inception",
    genre: "Crime"
  },
  {
    id: 3,
    title: "Titanic",
    genre: "Romance"
  }
]
const Home = lazy(() => import('./pages/Home'))
const Trending = lazy(() => import('./pages/Trending'))

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log(theme, "the");

  const [movieData, setMovieData] = useState([])
  const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

  const getMovies = async () => {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTYzMGZlOTkzNzM1NGNmYjM3MjhjMjI5NDhmOWE0MyIsIm5iZiI6MTc0MzUxMTM3OC43MTgwMDAyLCJzdWIiOiI2N2ViZGY1MjU4ZTBhYTIzMzhmYjEwMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3-eh4jUswnQR6RwsBMo6QvFKYQH98sGxeMzLem_OK64'
      }
    }).then(res => res.json()).then(item => item.results)
    setMovieData(data);
  }


  const isFetching = true;

  useEffect(() => {
    getMovies()
  }, [isFetching])



  //Filter movie on the basis of search
  const filterMovies = moviesData.filter((items) => items.title.toLowerCase().includes(searchTerm.toLowerCase()));
  // console.log(filterMovies,"ff");
  return (

    <ThemeProvider>



      <BrowserRouter>
        <NavBar />
        <input type='text' placeholder='Search movies...' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        {/* <div>
    {filterMovies.length > 0 ? (
      filterMovies.map((movie)=>(
        <div>
        <h2> {movie.title}</h2>
        <p>{movie.genre}</p>
        </div>
        
        ))
        ):(
          <p> no movies found</p>
          )}
          </div> */}
        {/* <ToggleTheme/> */}

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/movie-details/:id' element={<MovieDetails />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>


  )
}

export default App
