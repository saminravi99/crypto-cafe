import { useEffect, useState } from "react";


const useData = () => {
    const [data, setData] = useState([]);

    // console.log(data)

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