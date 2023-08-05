import React from 'react';
import './CloseIcon.scss';

export const CloseIcon: React.FC = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className='closeIcon'
    >
      {/* <g stroke-width="0"/> */}
      {/* <g stroke-linecap="round" stroke-linejoin="round"/> */}
      <g>
        <g>
          <path
            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
            className='closeIcon__P'
          />
        </g>
      </g>
    </svg>
  );
};
