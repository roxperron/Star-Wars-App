import React from 'react'
import { useEffect, useState } from "react";
import CharacterService from "../Service/CharacterService";




const useFetchCharacters = () => {
	const [data, setData] = useState([]);

	const characterService = new CharacterService;

	const getCharacters = async () => {
		const data = await characterService.getCharacters();
		console.log(data)
		setData(data);
	}

	useEffect(() => {
		getCharacters();
	}, []);

  return data;
}

export default useFetchCharacters;