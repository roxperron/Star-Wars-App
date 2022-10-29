import React from 'react'
import { useEffect, useState } from "react";
import StarshipService from "../Service/StarshipService";




const useFetchStarships = () => {
	const [data, setData] = useState([]);

	const starshipService = new StarshipService;

	const getStarships = async () => {
		const data = await starshipService.getStarships();
		console.log(data)
		setData(data);
	}

	useEffect(() => {
		getStarships();
	}, []);

  return data;
}

export default useFetchStarships;