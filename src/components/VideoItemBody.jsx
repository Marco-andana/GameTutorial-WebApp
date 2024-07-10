import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { GiSandsOfTime } from "react-icons/gi";
import PropTypes from 'prop-types';

const VideoItemBody = ({id, title, desc, duration, locked}) => {
  const [isSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (locked && !isSubscribed) {
      alert('This content is locked. Please subscribe to unlock.');
      navigate(`/videos/${title}`)
    } else {
      navigate(`/videos/${title}/${id}`)
    }
  };
  return (
    <div className='bg-gray-200 min-h-28' onClick={handleClick}>
      <div className='p-7'>
        <h3 
        className='text-black font-semibold text-xl pb-4'
        style={{marginTop: '-10px'}}
        >{title}</h3>
        <p className='text-gray-400 text-lg font-semibold mb-2'>{desc}</p>
        <div className='grid grid-cols-2 pt-3 text-gray-600 text-lg'>
          <div className='flex items-center'>
            <GiSandsOfTime className='text-gray-600 text-xl' />
            <span className='ml-2'>{duration} hr</span>
          </div>
        </div>
      </div>
    </div>
  )
}

VideoItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  locked: PropTypes.bool.isRequired,
}

export default VideoItemBody
