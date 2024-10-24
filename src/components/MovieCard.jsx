import React from "react";
import { FaHeart } from "react-icons/fa";

function MovieCard({ movieData, addToFav }) {
	return (
		<div className="flex flex-col w-96 h-72">
			<img
				src={movieData.Poster}
				alt=""
				className="h-[80%] w-full object-cover rounded-md"
			/>
			<div className="text-xl font-bold">{movieData.Title}</div>
			<div className="flex justify-between">
				<span>Released: {movieData.Year}</span>

				<FaHeart
					className={movieData.isFav ? "text-red-700" : ""}
					onClick={()=>addToFav(movieData.Title)}
				/>
			</div>
		</div>
	);
}

export default MovieCard;
