import React from 'react'
import VideoItemImage from './VideoItemImage'
import VideoItemBody from './VideoItemBody'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const VideoItem = ({ title, desc, duration, videos, img}) => {
  return (
    <div className='min-w-72 max-w-72'>
    <Link to={`/videos/${title}`}>
      <VideoItemImage img={img} />
      <VideoItemBody title={title} desc={desc} duration={duration} videos={videos} />
      </Link>
    </div>
    
  )
}

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
}

export default VideoItem
