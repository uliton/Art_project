import React, { useState } from 'react';
import './User.scss';
import { useNavigate, useParams } from 'react-router-dom';
// import { UnknownUserIcon } from '../../ui/UnknownUserIcon';
import { BlackButton } from '../../ui/BlackButton';
import { CrimsonButton } from '../../ui/CrimsonButton';
import { UnknownUserIcon } from '../../ui/UnknownUserIcon';

export const User: React.FC = () => {
  const { id } = useParams();

  const [phone, setPhone] = useState<string>('');
  const [sex, setSex] = useState('');
  const [artistStatus, setArtistStatus] = useState<boolean>(false);
  const [artistRequest, setArtistRequest] = useState<boolean>(false);

  const handlerPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handlerSelectSex = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSex(event.target.value);
  };

  const handlerSelectStatus = (event: React.FormEvent<HTMLSelectElement>) => {
    setArtistStatus(!artistStatus);
  };

  const navigate = useNavigate();
  const handlerSendRequest = () => {
    navigate('/');
  };

  const handlerSave = () => {
    // all chnges send to server
    if (artistStatus) {
      setArtistRequest(!artistRequest)
    }
  };

  const userInfo = {
    id,
    first_name: 'Alex',
    surname: 'Born',
    phone,
    sex,
    artistStatus,
  }

  const handlerChangePhoto = () => {
    document.getElementById('photo-changer')?.click();
  }

  return (
    <div className="user container">
      <h3 className="user__title">
        User info
      </h3>

      <div className="user__wrapper">
        <div className="user__photo">
          <UnknownUserIcon
            info={true}
          />

          <BlackButton
            isShown
            text='Change photo'
            handler={handlerChangePhoto}
          />
          <input id="photo-changer" type="file" name="photo" style={{display: "none"}} />
        </div>

        <div className="user__info">
          <ul className="user__info__list">
            <li className="user__info__item">ID: {userInfo.id}</li>
            <li className="user__info__item">First name: {userInfo.first_name}</li>
            <li className="user__info__item">Surname: {userInfo.surname}</li>
            <li className="user__info__item">Phone number:
              <input type="text" value={userInfo.phone} onChange={handlerPhoneChange} />
            </li>
            <li className="user__info__item">Sex:
              <select onChange={handlerSelectSex}>
                <option selected disabled>Choose your sex</option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
                <option value="undecided">Undecided</option>
              </select>
            </li>
            <li className="user__info__item">Status:
              <select name="" id="" onChange={handlerSelectStatus} >
                <option>User</option>
                <option>Artist</option>
              </select>
            </li>
          </ul>

          <CrimsonButton
            text="Save"
            handler={handlerSave}
          />
          
          {artistRequest && (
            <BlackButton isShown text='send a request' handler={handlerSendRequest} />
          )}
        </div>
      </div>
    </div>
  );
};
