class StarshipService {
	constructor () {}
    
    url="https://swapi.dev/api/starships";

    async getStarships() {
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

    async getStarshipByUrl(url){
        try{
            const response = await fetch(url);
            if(!response.ok) throw new Error(response.statusText);
            return await response.json();

        } catch (e){
            console.error(e);

            return{};

        }
    }

    async getStarshipById(id){
        try{
            const response = await fetch(`https://swapi.dev/api/starships/${id}`);
            if(!response.ok) throw new Error(response.statusText);
            return await response.json();

        } catch (e){
            console.error(e);

            return{};

        }
    }
    

}

export default StarshipService;