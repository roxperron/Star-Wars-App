class VehicleService {
	constructor () {}
    
    url="https://swapi.dev/api/vehicles";

    async getVehicles() {
        try {
            const response = await fetch(this.url);

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const { results } = await response.json();
 
            return results;
            
        } catch (e) {
            console.error(e);

            return {};
        }
    }

    async getVehicleByUrl(url){
        try{
            const response = await fetch(url);
            if(!response.ok) throw new Error(response.statusText);
            return await response.json();

        } catch (e){
            console.error(e);

            return{};

        }
    }

    async getVehicleById(id){
        try{
            const response = await fetch(`https://swapi.dev/api/vehicles/${id}`);
            if(!response.ok) throw new Error(response.statusText);
            return await response.json();

        } catch (e){
            console.error(e);

            return{};

        }
    }
    

}

export default VehicleService;
