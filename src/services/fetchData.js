import { useEffect, useState } from 'react'
// CREATING A CUSTOM HOOK FOR FETCHING THE API 
const useFetchMovies = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTYzMGZlOTkzNzM1NGNmYjM3MjhjMjI5NDhmOWE0MyIsIm5iZiI6MTc0MzUxMTM3OC43MTgwMDAyLCJzdWIiOiI2N2ViZGY1MjU4ZTBhYTIzMzhmYjEwMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3-eh4jUswnQR6RwsBMo6QvFKYQH98sGxeMzLem_OK64'
                }
            });
            const json = await res.json();
            setData(json.results);
            setIsLoading(false);
        }

        getData();
    }, [url])

    return {
        data, isLoading
    }
}

export default useFetchMovies
