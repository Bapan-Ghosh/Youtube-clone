import VideoCard from './VideoCard';
import { useEffect,useState } from 'react';
import { youtubeAPI } from '../utils/Constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtubeAPI);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items)
  };
  return (
    <div className='grid grid-cols-4 gap-1 p-0'>
      {videos.map((video)=>{
        return (
        <Link key={video.id} to={"/watch?v="+ video.id}> <VideoCard className="cursor-pointer"  info={video}/></Link>
        )
        })}
    </div>
  )
}

export default VideoContainer