import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function Favorites({ movies }) {
	return (
		<>
			<Navbar />

			<div>Favourites</div>

			<div>
				<div>
					{movies
						.filter((data) => data.isFav)
						.map((fav) => {
							return <MovieCard movieData={fav} />;
						})}
				</div>
			</div>
		</>
	);
}

export default Favorites;
