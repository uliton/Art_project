import React from 'react';
import './UnknownUserIcon.scss';
import classNames from 'classnames';

type Props = {
  info?: boolean;
}

export const UnknownUserIcon: React.FC<Props> = ({ info }) => {
  const icon: number = 1;

  return (
    <div>
      {/* 1 */}
      {icon === 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={classNames("unknownUserIcon", {
            "unknownUserIcon__info": info,
          })}
          viewBox="0 0 256 256"
          id="unknownUserIcon"
        >
          <g
            className="unknownUserIcon__G"
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
          >
            <path
              d="M 45 53.718 c -10.022 0 -18.175 -8.153 -18.175 -18.175 S 34.978 17.368 45 17.368 c 10.021 0 18.175 8.153 18.175 18.175 S 55.021 53.718 45 53.718 z"
              className="unknownUserIcon__P"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
            <path
              d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 74.821 70.096 c -3.543 -5.253 -8.457 -9.568 -14.159 -12.333 c -2.261 -1.096 -4.901 -1.08 -7.247 0.047 c -2.638 1.268 -5.47 1.91 -8.415 1.91 c -2.945 0 -5.776 -0.643 -8.415 -1.91 c -2.343 -1.125 -4.984 -1.143 -7.247 -0.047 c -5.702 2.765 -10.616 7.08 -14.16 12.333 C 9.457 63.308 6 54.552 6 45 C 6 23.495 23.495 6 45 6 s 39 17.495 39 39 C 84 54.552 80.543 63.308 74.821 70.096 z"
              className="unknownUserIcon__P"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
        </svg>
      )}

      {/* 2 */}
      {icon === 2 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={classNames("unknownUserIcon", {
            "unknownUserIconInfo": info,
          })}
          viewBox="0 0 256 256"
        >
          <g
            className="unknownUserIcon__G"
            transform="translate(0 -2.842170943040401e-14) scale(2.81 2.81)"
          >
            <path
              d="M 69.681 90 H 20.319 C 9.115 90 0 80.885 0 69.681 V 20.319 C 0 9.115 9.115 0 20.319 0 h 49.362 C 80.885 0 90 9.115 90 20.319 v 49.362 C 90 80.885 80.885 90 69.681 90 z M 20.319 5.625 c -8.102 0 -14.694 6.592 -14.694 14.694 v 49.362 c 0 8.102 6.592 14.694 14.694 14.694 h 49.362 c 8.102 0 14.694 -6.592 14.694 -14.694 V 20.319 c 0 -8.102 -6.592 -14.694 -14.694 -14.694 H 20.319 z"
              className="unknownUserIcon__P"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
          <g
            className="unknownUserIcon__G"
            transform="translate(19.4347624206779 29.34034979105398) scale(2.42 2.42)"
          >
            <path
              d="M 69.838 61.783 h -7.472 c -4.249 0 -7.705 -4.577 -7.705 -10.233 c 0.002 -1.353 0.692 -2.615 1.802 -3.293 c 6.614 -4.04 10.563 -11.062 10.563 -18.784 v -6.895 c 0 -6.06 -2.503 -11.992 -6.865 -16.274 c -4.251 -4.171 -9.789 -6.406 -15.582 -6.3 C 32.666 0.227 22.973 10.106 22.973 22.026 v 7.446 c 0 7.723 3.949 14.745 10.563 18.784 c 1.11 0.679 1.801 1.94 1.803 3.324 c 0 5.625 -3.457 10.202 -7.706 10.202 h -7.471 c -7.775 0 -14.1 6.325 -14.1 14.1 V 89 c 0 0.553 0.448 1 1 1 h 75.876 c 0.553 0 1 -0.447 1 -1 V 75.884 C 83.938 68.108 77.613 61.783 69.838 61.783 z"
              className="unknownUserIcon__P"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
            />
          </g>
        </svg>
      )}
      
      {/* 3 */}
      {icon === 3 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={classNames("unknownUserIcon", {
            "unknownUserIconInfo": info,
          })}
          viewBox="0 0 256 256"
        >
          <g
            className="unknownUserIcon__G"
            transform="translate(0 -2.842170943040401e-14) scale(2.81 2.81)"
            >
            <path
              d="M 69.681 90 H 20.319 C 9.115 90 0 80.885 0 69.681 V 20.319 C 0 9.115 9.115 0 20.319 0 h 49.362 C 80.885 0 90 9.115 90 20.319 v 49.362 C 90 80.885 80.885 90 69.681 90 z M 20.319 5.625 c -8.102 0 -14.694 6.592 -14.694 14.694 v 49.362 c 0 8.102 6.592 14.694 14.694 14.694 h 49.362 c 8.102 0 14.694 -6.592 14.694 -14.694 V 20.319 c 0 -8.102 -6.592 -14.694 -14.694 -14.694 H 20.319 z"
              className="unknownUserIcon__P"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              />
          </g>
          <g
            className="unknownUserIcon__G"
            transform="translate(19.4347624206779 29.34034979105398) scale(2.42 2.42)"
            >
            <path
              d="M 85.625 88.42 c 3.702 0 5.704 -4.286 3.381 -7.169 C 78.652 68.397 62.791 60.168 45 60.168 S 11.348 68.397 0.994 81.251 c -2.323 2.883 -0.321 7.169 3.381 7.169 H 85.625 z"
              className="unknownUserIcon__P"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              />
            <path
              d="M 45 53.944 L 45 53.944 c -11.289 0 -20.441 -9.152 -20.441 -20.441 V 22.021 C 24.559 10.732 33.711 1.58 45 1.58 h 0 c 11.289 0 20.441 9.152 20.441 20.441 v 11.482 C 65.441 44.792 56.289 53.944 45 53.944 z"
              className="unknownUserIcon__P"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              />
          </g>
        </svg>
      )}
      
      {/* 4 */}
      {icon === 4 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={classNames("unknownUserIcon", {
            "unknownUserIconInfo": info,
          })}
          viewBox="0 0 256 256"
        >
        <g
          className="unknownUserIcon__G"
          transform="translate(0 -2.842170943040401e-14) scale(2.81 2.81)"
          >
          <path
            d="M 69.681 90 H 20.319 C 9.115 90 0 80.885 0 69.681 V 20.319 C 0 9.115 9.115 0 20.319 0 h 49.362 C 80.885 0 90 9.115 90 20.319 v 49.362 C 90 80.885 80.885 90 69.681 90 z M 20.319 5.625 c -8.102 0 -14.694 6.592 -14.694 14.694 v 49.362 c 0 8.102 6.592 14.694 14.694 14.694 h 49.362 c 8.102 0 14.694 -6.592 14.694 -14.694 V 20.319 c 0 -8.102 -6.592 -14.694 -14.694 -14.694 H 20.319 z"
            className="unknownUserIcon__P"
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
            />
        </g>
        <g
          className="unknownUserIcon__G"
          transform="translate(23.89227673734716 33.79786410772324) scale(2.32 2.32)" >
          <path
            d="M 77.389 90 c 2.143 0 3.881 -1.738 3.881 -3.881 v -6.047 c 0 -13.352 -8.896 -24.721 -21.054 -28.486 c -2.775 -0.859 -4.675 -3.413 -4.675 -6.319 v 0 c 0 -1.777 0.723 -3.472 1.989 -4.72 c 3.277 -3.231 5.314 -7.713 5.314 -12.679 l 0 -9.596 c 0 -9.676 -7.524 -17.917 -17.194 -18.261 C 35.499 -0.349 27.155 7.773 27.155 17.845 v 10.024 c 0 4.966 2.037 9.448 5.314 12.679 c 1.266 1.248 1.989 2.942 1.989 4.72 v 0 c 0 2.905 -1.899 5.459 -4.675 6.319 C 17.627 55.351 8.73 66.72 8.73 80.072 v 6.047 c 0 2.143 1.738 3.881 3.881 3.881 H 77.389 z"
            className="unknownUserIcon__P"
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
            />
        </g>
        </svg>
      )}
    </div>
  );
};

