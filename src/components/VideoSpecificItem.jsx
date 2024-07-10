import React from 'react'
import VideoItemImage from './VideoItemImage'
import VideoItemBody from './VideoItemBody'
import PropTypes from 'prop-types'

const VideoSpecificItem = ({id, title, desc, duration, videos, img, difficult, locked}) => {
  return (
    <div className='min-w-72 max-w-72'>
      <VideoItemImage img={img} difficult={difficult} locked={locked} id={id} title={title} />
      <VideoItemBody id={id} title={title} desc={desc} duration={duration} videos={videos} locked={locked} />
    </div>
    
  )
}

VideoSpecificItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  videos: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  difficult: PropTypes.string.isRequired,
  locked: PropTypes.bool.isRequired,
}

export default VideoSpecificItem
