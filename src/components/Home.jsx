import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import Searchbar from "./Searchbar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Footer from "./Footer";
import MovieDataContext from "../movieContext/movieContext";
import { Link } from "react-router-dom";

function Home() {
	const [search, setSearch] = useState("");
	const { moviesData, setMoviesData } = useContext(MovieDataContext);
	const addToFav = (movie) => {
		setMoviesData(
			moviesData.map((data) => {
				if (data.Title === movie) return { ...data, isFav: true };
				else return data;
			})
		);
	};

	useEffect(() => {
		axios
			.get("http://www.omdbapi.com/?i=tt3896198&apikey=8b443bc5&s=batman")
			.then((response) => {
				setMoviesData(
					response.data.Search.map((data) => ({ ...data, isFav: false }))
				);
			});
	}, []);

	return (
		<>
			<header>
				<Navbar />
			</header>
			<div className="flex justify-center mt-20">
				<Searchbar search={search} setSearch={setSearch} />
			</div>
			<div className="flex justify-center mt-20">
				<div className="grid grid-cols-3 gap-10 ">
					{moviesData
						.filter((movie) => {
							return movie.Title.toLowerCase().includes(search.toLowerCase());
						})
						.map((filteredMovie, index) => {
							return (
								<Link to={`/movie/${filteredMovie.Title}`}>
									<MovieCard
										key={index}
										movieData={filteredMovie}
										addToFav={addToFav}
									/>
								</Link>
							);
						})}
				</div>
			</div>

			<Footer className="mt-12" />
		</>
	);
}

export default Home;
