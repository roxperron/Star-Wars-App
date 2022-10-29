class MovieService {
	constructor () {}
    
    url="https://swapi.dev/api/films";

    async getMovies() {
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

    async getMovieByUrl(url){
        try{
            const response = await fetch(url);
            if(!response.ok) throw new Error(response.statusText);
            return await response.json();

        } catch (e){
            console.error(e);

            return{};

        }
    }

    async getMovieById(id){
        try{
            const response = await fetch(`${this.url}/${id}`);
            if(!response.ok) throw new Error(response.statusText);
            return await response.json();

        } catch (e){
            console.error(e);

            return{};

        }
    }
    

}

export default MovieService;
