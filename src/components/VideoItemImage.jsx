import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const VideoItemImage = ({id, title, img, difficult, locked }) => {
  const [isSubscribed] = useState(false);
  const navigate = useNavigate();
  console.log('Difficult:', difficult); // Add this line to verify

  const handleClick = () => {
    if (locked && !isSubscribed) {
      alert('This content is locked. Please subscribe to unlock.');
      navigate(`/videos/${title}`)
    } else {
      navigate(`/videos/${title}/${id}`)
    }
  };

  return (
    <div className='relative mt-3' onClick={handleClick}>
      <p className={`absolute bg-Intermediate font-bold px-4 py-2 pt-1`}>
        {difficult}
      </p>
      <img 
        src={img} 
        alt='thumbnail' 
        className={`w-full h-40 object-cover ${locked && !isSubscribed ? 'opacity-50' : ''}`}
      />
      {locked && !isSubscribed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold">Locked</span>
        </div>
      )}
    </div>
  );
}

VideoItemImage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  difficult: PropTypes.string.isRequired,
  locked: PropTypes.bool.isRequired,
}

export default VideoItemImage;
