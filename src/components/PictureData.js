import { useState, useEffect } from "react";

const PictureData = () => {
    const [ picture, setPicture ] = useState("");

    const API_KEY ="Place Your API_KEY here"; 

    useEffect(() => {
        fetchPhoto();
    
        async function fetchPhoto() {
          const res = await fetch(
                    // we'll update the KEYHERE soon!
            `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
          );
          const data = await res.json();
          setPicture(data);
        }
      }, []);
    return [picture]
}

export default PictureData
