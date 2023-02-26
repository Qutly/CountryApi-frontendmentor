import { useState } from "react";

const useTrackCountries = () => {
    
    const [index, setIndex] = useState(0);
    const [country, setCountry] = useState("");

    const goForward = (name) => {
        if(index >= 1) return;
        setCountry(name);
        setIndex((prev) => prev + 1);
    }

    const goBack = () => {
        if(index <= 0) return;
        setCountry("");
        setIndex((prev) => prev - 1);
    }

    return {
        index,
        country,
        goForward,
        goBack
    }
}

export default useTrackCountries;