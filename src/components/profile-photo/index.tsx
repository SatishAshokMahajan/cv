import * as React from 'react';
import './style.scss';
import profilePic from '../../images/profilePicBnW.jpeg';

interface ProfilePhotoProps {
    name?: string,
}

export const ProfilePhoto: React.SFC<ProfilePhotoProps> = (props) => {
    return (
        <div className="profile-photo">
            <img src={profilePic} className="profile-photo__photo" />
        </div>
    );

}
