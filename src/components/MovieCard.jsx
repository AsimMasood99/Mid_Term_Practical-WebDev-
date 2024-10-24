import React from "react";

function MovieCard() {
	return (
		<div className="flex flex-col border-2 w-96 h-72 p-3 rounded-md">
      <div>
        <img src="" alt="" />
      </div>
			<div className="text-xl font-bold">Title</div>
			<div className="flex justify-between">
				<span>Released</span>
        <span>Rating</span>
			</div>
		</div>
	);
}

export default MovieCard;
