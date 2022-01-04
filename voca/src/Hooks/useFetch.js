import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data)
        })
        .catch(err => 
            console.log(err)
        )
    }, [url]);

    return data;
}