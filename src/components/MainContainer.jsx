import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex flex-col ml-3 mr-0'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer