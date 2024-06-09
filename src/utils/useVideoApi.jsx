import { useEffect, useState } from "react"
import { youtubeAPI } from "./Constants";

const useVideoApi = ()=>{
     const [videoData, setvideoData] = useState()
     useEffect (()=>{
         fetchData(); 
     },[])

     const fetchData = async () =>{
         const data = await fetch(youtubeAPI);
         const json = await data.json();
         setvideoData(json.items)
     }
     return videoData;
    
}

export default useVideoApi;