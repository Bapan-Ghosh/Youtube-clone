import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    // const {snippet, statistics} = info;
    // const {channelTitle, title, thumbnails} = snippet 
  return (
    <div className=' m-1 mb-5 p-0'>
        <img className='rounded-xl' src={info?.snippet?.thumbnails?.medium.url} alt="info?.snippet?.thumbnails?.medium.url" />
        <ul>
            <li className='font-bold py-2'>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{info?.statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard