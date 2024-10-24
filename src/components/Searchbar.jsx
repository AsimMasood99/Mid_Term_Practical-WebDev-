import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar({search, setSearch}) {


	return (
		<div className="flex items-center borde w-[40%] bg-slate-300 p-2 rounded-2xl">
			<input
				type="text"
				placeholder="Search Movie"
				className="bg-slate-300 w-full px-2 focus:outline-none"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
			/>
			<FaSearch className="text-2xl" />
		</div>
	);
}

export default Searchbar;
