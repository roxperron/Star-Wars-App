class CharacterService {
	constructor () {}
    
    url="https://swapi.dev/api/people";

    async getCharacters() {
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

    async getCharacterByUrl(url){
        try{
            const response = await fetch(url);
            if(!response.ok) throw new Error(response.statusText);
            return await response.json();

        } catch (e){
            console.error(e);

            return{};

        }
    }

    async getCharacterById(id){
        try{
            const response = await fetch(`https://swapi.dev/api/people/${id}`);
            if(!response.ok) throw new Error(response.statusText);
            return await response.json();

        } catch (e){
            console.error(e);

            return{};

        }
    }
    

}

export default CharacterService;
