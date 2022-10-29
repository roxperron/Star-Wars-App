import React from 'react'
import { useEffect, useState } from "react";
import MovieService from "../Service/MovieService";




const useFetchMovies = () => {
	const [data, setData] = useState([]);

	const movieService = new MovieService;

	const getMovies = async () => {
		const data = await movieService.getMovies();
		console.log(data)
		setData(data);
	}

	useEffect(() => {
		getMovies();
	}, []);

  return data;
}

export default useFetchMovies;