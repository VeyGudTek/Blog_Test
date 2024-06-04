import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw Error("Data does not exist")
            }
            return res.json()
        })
        .then((data) => {
            setData(data)
            setIsLoading(false)
            setError(null)
        })
        .catch((e) => {
            setError(e.message)
            setIsLoading(false)
        })
    }, [url])

    return { data, isLoading, error }
}

export default useFetch