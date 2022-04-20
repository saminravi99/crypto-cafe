import { useEffect, useState } from "react";


const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(response => response.json())
            .then(json => setReviews(json))
            .catch(error => console.log(error));
    }
    , [])
    
    return reviews;
}

export default useReviews;
