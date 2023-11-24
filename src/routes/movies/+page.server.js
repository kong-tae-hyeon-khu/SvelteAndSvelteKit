// Client-Side-Code 에서는 접근 불가.
//import { TMDB_API_KEY } from '$env/static/private'
import 'dotenv/config'

export const load = async ({fetch}) => {
    const fetchMovis = async() => {
        
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`)
        const data = await res.json();
        return data.results;
    }
    return ({
        movies : fetchMovis(),
    })
}