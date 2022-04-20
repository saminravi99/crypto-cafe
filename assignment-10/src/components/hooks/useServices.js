import React from 'react';

const useServices = () => {

    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(json => setServices(json))
            .catch(error => console.log(error));
    }, []);


    return services;
};

export default useServices;