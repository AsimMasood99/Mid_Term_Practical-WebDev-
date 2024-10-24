import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import MovieDataContext from "./movieContext/movieContext";
import { useState } from "react";
import Movie from "./components/Movie";
function App() {
	const [moviesData, setMoviesData] = useState([]);

	return (
		<>
			<MovieDataContext.Provider value={{ moviesData, setMoviesData }}>
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route
							exact
							path="/favorites"
							element={<Favorites movies={moviesData} />}
						/>
            <Route path="/movie/:Title" element={<Movie moviesData={moviesData}/>}/>
					</Routes>
				</Router>
			</MovieDataContext.Provider>
		</>
	);
}

export default App;
