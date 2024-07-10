import React from 'react';
import PropTypes from 'prop-types';

const AnnounceBar = ({ title, content, ctaLabel, type, onClick }) => {
  const getTypeClass = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700';
      case 'info':
        return 'bg-blue-100 text-blue-700';
      default:
        return '';
    }
  };

  return (
    <div className={`p-4 rounded-lg flex justify-between items-center mb-4 ${getTypeClass(type)}`}>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p>{content}</p>
      </div>
      {ctaLabel && (
        <button
          className="ml-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          onClick={onClick}
        >
          {ctaLabel}
        </button>
      )}
    </div>
  );
};

AnnounceBar.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  ctaLabel: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  onClick: PropTypes.func,
};

AnnounceBar.defaultProps = {
  ctaLabel: '',
  type: 'info',
  onClick: () => {},
};

export default AnnounceBar;
