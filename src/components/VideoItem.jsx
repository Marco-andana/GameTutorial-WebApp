import React from 'react'
import VideoItemImage from './VideoItemImage'
import VideoItemBody from './VideoItemBody'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const VideoItem = ({id, url, title, desc, duration, videos, img}) => {
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
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  duration: PropTypes.string,
  videos: PropTypes.array,
  img: PropTypes.string,
}

export default VideoItem
