import { useState } from "react";

const useTrackTheme = () => {

    const mode = localStorage.getItem('mode')
  
    const [theme, setTheme] = useState(mode);
  
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
        localStorage.setItem('mode', theme === "light" ? "dark" : "light")
    }

    if(localStorage.getItem("mode") === null) {
        localStorage.setItem('mode', 'light');
        setTheme("light")
    }

    return {
        mode,
        changeTheme
    }
}

export default useTrackTheme