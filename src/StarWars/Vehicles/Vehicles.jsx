import React from 'react';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import useFetchVehicles from '../../Hook/useFetchVehcles';


import VehiclesList from './VehiclesList';



const Vehicles = ( ) => {
const vehicles = useFetchVehicles;
  return (
    <Fragment>
        <VehiclesList vechiles={vehicles} />
    </Fragment>
  )
}

export default Vehicles;
