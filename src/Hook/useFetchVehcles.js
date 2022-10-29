import React from 'react'
import { useEffect, useState } from "react";
import VehicleService from "../Service/VehicleService";




const useFetchVehicles = () => {
	const [data, setData] = useState([]);

	const vehicleService = new VehicleService;

	const getVehicles = async () => {
		const data = await vehicleService.getVehicles();
		console.log(data)
		setData(data);
	}

	useEffect(() => {
		getVehicles();
	}, []);

  return data;
}

export default useFetchVehicles;