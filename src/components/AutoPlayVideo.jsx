import React from 'react'
import PropTypes from 'prop-types'

const AutoPlayVideo = ({trailer}) => {
  return (
    <div className='h-screen absolute'>
      <video 
      src={trailer}
      autoPlay
      loop
      className='w-screen h-4/6 object-cover'
      />
    </div>
  )
}

AutoPlayVideo.propTypes = {
  trailer: PropTypes.string.isRequired,
}

export default AutoPlayVideo
