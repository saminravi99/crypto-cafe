import { useEffect, useState } from "react";


const useData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.log(error));
    }
    , [])
    
    return data;
}

export default useData;