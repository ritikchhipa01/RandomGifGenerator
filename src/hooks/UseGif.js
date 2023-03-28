
import { useState, useEffect } from 'react';
import axios from 'axios';

const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=voZ5QgEkXo9jm73pzgipYfFPKyf3MpT0`;

const UseGif = (tag) => {
    
    const [loading, setLoading] = useState(false);
    const [gif, setGif] = useState("");

    const fetchData = async (tag) =>{   
        setLoading(true)
        
         const {data} = await axios.get(tag? `${randomUrl}&tag=${tag}` : randomUrl) ;
        //  console.log(data)
         const imageSource = data.data.images.downsized_large.url;
         console.log(imageSource);
         
         setGif(imageSource);
         setLoading(false);

    }

    useEffect(() => {
       fetchData();
    },[]);

    return{ gif, loading, fetchData};
}

export default UseGif;
